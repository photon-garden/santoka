#![allow(non_snake_case, non_upper_case_globals)]

use axum::{routing::get, Router};
use shared::prelude::*;
use std::net::SocketAddr;
use std::{env, fs};

pub mod assets;
pub mod database;
pub mod extensions;
pub mod manifest;
pub mod prelude;
pub mod routes;

use color_eyre::eyre::Result;
use prelude::*;

#[tokio::main]
async fn main() -> Result<()> {
    color_eyre::install()?;

    match get_mode() {
        Mode::Dev => dev().await,
        Mode::Build => build(),
    }

    Ok(())
}

async fn dev() {
    let app = Router::new()
        .route("/", get(routes::get))
        .route(
            &assets.main_css.url.with_leading_slash(),
            get(routes::main_css::get),
        )
        .route(
            &assets.hasui_light_jpeg.url.with_leading_slash(),
            get(routes::hasui_light_jpeg::get),
        )
        .route(
            &assets.hasui_dark_jpeg.url.with_leading_slash(),
            get(routes::hasui_dark_jpeg::get),
        )
        .route(
            &assets.browser_js.url.with_leading_slash(),
            get(routes::browser_js::get),
        )
        .route(
            &assets.browser_bg_wasm.url.with_leading_slash(),
            get(routes::browser_bg_wasm::get),
        )
        .route("/build-time", get(routes::build_time::get));

    let port = 3000;
    let address = SocketAddr::from(([127, 0, 0, 1], port));

    println!("Listening on http://{}", address);

    axum::Server::bind(&address)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

fn build() {
    let built_dir = manifest::dir().join("built");

    if let Err(error) = fs::remove_dir_all(&built_dir) {
        println!("Error removing ./built folder: {}", error);
    }

    fs::create_dir(&built_dir).unwrap();

    let index_html_built_path = built_dir.join("index.html");
    let minified_html =
        minify_html::minify(routes::render_get().as_bytes(), &minify_html::Cfg::new());
    fs::write(index_html_built_path, minified_html).unwrap();

    let main_css_built_path = built_dir.join(assets.main_css.url);
    fs::copy(assets.main_css.absolute_path(), main_css_built_path).unwrap();

    let hasui_light_jpeg_built_path = built_dir.join(assets.hasui_light_jpeg.url);
    fs::write(hasui_light_jpeg_built_path, assets.hasui_light_jpeg.bytes).unwrap();

    let hasui_dark_jpeg_built_path = built_dir.join(assets.hasui_dark_jpeg.url);
    fs::write(hasui_dark_jpeg_built_path, assets.hasui_dark_jpeg.bytes).unwrap();

    let browser_js_built_path = built_dir.join(assets.browser_js.url);
    // let minified_js = minifier::js::minify(assets.browser_js.contents).to_string();
    let minified_js = assets.browser_js.contents;
    fs::write(browser_js_built_path, minified_js).unwrap();

    let browser_bg_wasm_built_path = built_dir.join(assets.browser_bg_wasm.url);
    fs::write(browser_bg_wasm_built_path, assets.browser_bg_wasm.bytes).unwrap();
}

fn get_mode() -> Mode {
    let args: Vec<String> = env::args().collect();

    let arg = args[1].as_str();

    match arg {
        "build" => Mode::Build,
        "dev" => Mode::Dev,
        _ => panic!("Pass either 'dev' or 'build' as an arg."),
    }
}

enum Mode {
    Dev,
    Build,
}

pub static build_time: &str = include_str!("../../target/build_time.txt");
