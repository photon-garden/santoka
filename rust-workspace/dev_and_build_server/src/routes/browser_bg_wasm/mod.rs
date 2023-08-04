use crate::prelude::*;
use axum::body::{Bytes, Full};
use axum::response::Response;

#[axum::debug_handler]
pub async fn get() -> Response<Full<Bytes>> {
    let body = Full::from(assets.browser_bg_wasm.bytes);
    Response::builder()
        .header("Content-Type", "application/wasm")
        .body(body)
        .unwrap()
}
