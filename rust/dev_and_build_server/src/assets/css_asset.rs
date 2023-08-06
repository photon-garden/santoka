use crate::prelude::*;

pub struct CssAsset {
    pub asset_path: &'static str,
    pub contents: &'static str,
}

impl Asset for CssAsset {
    fn asset_path(&self) -> &str {
        &self.asset_path
    }

    fn bytes(&self, _mode: &Mode) -> Vec<u8> {
        self.contents.as_bytes().to_vec()
    }
}
