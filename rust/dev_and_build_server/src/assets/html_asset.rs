use crate::prelude::*;

pub struct HtmlAsset {
    pub asset_path: &'static str,
    pub contents: String,
}

impl HtmlAsset {
    fn minified_contents(&self) -> Vec<u8> {
        minify_html::minify(self.contents.as_bytes(), &minify_html::Cfg::new())
    }
}

impl NonImageAsset for HtmlAsset {
    fn asset_path(&self) -> &'static str {
        self.asset_path
    }

    fn bytes(&self) -> Vec<u8> {
        // Un-minified. You can comment this back in if you want to debug.
        // self.contents.as_bytes().to_vec()

        // Minified.
        self.minified_contents()
    }
}
