use crate::prelude::*;

pub struct JsAsset {
    pub asset_path: &'static str,
    pub contents: &'static str,
}

impl JsAsset {
    pub fn minified_contents(&self) -> Vec<u8> {
        let session = minify_js::Session::new();
        let js_bytes = self.contents.as_bytes();
        let mut out = Vec::new();
        minify_js::minify(
            &session,
            minify_js::TopLevelMode::Module,
            js_bytes,
            &mut out,
        )
        .unwrap();
        out
    }
}

impl Asset for JsAsset {
    fn asset_path(&self) -> &str {
        &self.asset_path
    }

    fn bytes(&self, mode: &Mode) -> Vec<u8> {
        match mode {
            Mode::Dev => self.contents.as_bytes().to_vec(),
            Mode::Production => self.minified_contents(),
        }
    }
}