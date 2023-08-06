use crate::prelude::*;

pub struct WasmAsset {
    pub asset_path: &'static str,
    pub bytes: &'static [u8],
}

impl Asset for WasmAsset {
    fn asset_path(&self) -> &str {
        &self.asset_path
    }

    fn bytes(&self, _mode: &Mode) -> Vec<u8> {
        self.bytes.to_vec()
    }
}
