use dioxus_router::prelude::*;
use dioxus_ssr::incremental::{DefaultRenderer, IncrementalRendererConfig};
use std::path::{Path, PathBuf};
use std::str::FromStr;
use std::time::Duration;

use crate::prelude::*;
use crate::routes::Route;

#[derive(Debug)]
pub struct HtmlAsset {
    pub path: PathBuf,
    pub contents: String,
    pub load_time_budget: Duration,
}

static template: &str = r#"<!DOCTYPE html>
<html lang="en">
    {head_and_body}
</html>
"#;

impl HtmlAsset {
    pub async fn get_pages() -> Vec<HtmlAsset> {
        // create a VirtualDom with the app component
        // let mut app = VirtualDom::new(App);
        // rebuild the VirtualDom before rendering
        // let _ = app.rebuild();
        // render the VirtualDom to HTML
        // dioxus_ssr::render(&app)
        let temporary_asset_directory = crate::manifest::dir().join("target").join("temp");

        let mut renderer = IncrementalRendererConfig::new()
            .static_dir(&temporary_asset_directory)
            .build();

        let mut split_template = template.split("{head_and_body}");
        let before_body = split_template.next().unwrap();
        let after_body = split_template.next().unwrap();

        pre_cache_static_routes::<Route, _>(
            &mut renderer,
            &DefaultRenderer {
                before_body: before_body.to_string(),
                after_body: after_body.to_string(),
            },
        )
        .await
        .unwrap();

        // Pre-render the NonPreviewPoems route for each publication.
        // This isn't static, so doesn't get handled by pre_cache_static_routes.
        // We use an empty string for before_body and after_body because these
        // html files will get pulled in dynamically by JS in the browser.
        for publication in database.publications.iter() {
            render_route(
                &mut renderer,
                Route::NonPreviewPoems {
                    publication_id: publication.id,
                },
                &mut tokio::io::sink(),
                |vdom| {
                    Box::pin(async move {
                        let _ = vdom.rebuild();
                        vdom.wait_for_suspense().await;
                    })
                },
                &DefaultRenderer {
                    before_body: "".to_string(),
                    after_body: "".to_string(),
                },
            )
            .await
            .unwrap();
        }

        // Relative paths without the file name.
        let paths = Route::SITE_MAP
            .iter()
            .flat_map(|route| route.flatten().into_iter())
            .flat_map(|segments| {
                let joined_segments = &segments
                    .iter()
                    .map(|segment| segment.to_string())
                    .collect::<Vec<_>>()
                    .join("")[1..];

                // Handle the non-preview-poems route by expanding /non-preview-poems/:publication_id
                // into a vector of paths, one for each publication: /non-preview-poems/1, /non-preview-poems/2, etc.
                if joined_segments.contains(":publication_id") {
                    return database
                        .publications
                        .iter()
                        .map(|publication| {
                            joined_segments
                                .replace(":publication_id", publication.id.to_string().as_str())
                        })
                        .collect::<Vec<_>>();
                }

                vec![joined_segments.to_string()]
            })
            .filter_map(|segments| {
                if segments == ":...segments" {
                    return None;
                }

                Some(PathBuf::from_str(&segments).unwrap())
            })
            .collect::<Vec<_>>();

        paths
            .into_iter()
            .map(|cleaned_path| {
                let temp_path = temporary_asset_directory
                    .join(&cleaned_path)
                    .join("index.html");

                let contents = std::fs::read_to_string(temp_path).unwrap();
                let path = cleaned_path.join("index.html");

                HtmlAsset {
                    path,
                    contents,
                    load_time_budget: Duration::from_millis(1),
                }
            })
            .collect::<Vec<_>>()
    }

    fn minified_contents(&self) -> Vec<u8> {
        let mut minify_html_config = minify_html::Cfg::new();
        minify_html_config.minify_js = true;
        minify_html::minify(self.contents.as_bytes(), &minify_html_config)
    }
}

impl NonImageAsset for HtmlAsset {
    fn path(&self) -> &Path {
        &self.path
    }

    fn bytes(&self) -> Vec<u8> {
        // Un-minified. You can comment this back in if you want to debug.
        // self.contents.as_bytes().to_vec()

        // Minified.
        self.minified_contents()
    }

    fn load_time_budget(&self) -> Duration {
        self.load_time_budget
    }
}
