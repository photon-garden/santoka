use std::env;
use std::path::{Path, PathBuf};

pub fn dir() -> PathBuf {
    let cargo_manifest_dir_environment_variable = env::var("CARGO_MANIFEST_DIR").unwrap();
    Path::new(&cargo_manifest_dir_environment_variable).to_path_buf()
}
