use crate::prelude::*;

#[derive(PartialEq)]
pub struct JsonAsset {
    pub asset_path: &'static str,
    pub content: &'static str,
}

impl Asset for JsonAsset {
    fn asset_path(&self) -> &str {
        &self.asset_path
    }

    fn bytes(&self, _mode: &Mode) -> Vec<u8> {
        self.content.as_bytes().to_vec()
    }
}
