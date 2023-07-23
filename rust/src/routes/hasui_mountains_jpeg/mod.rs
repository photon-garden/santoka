use crate::assets;
use axum::body::{Bytes, Full};
use axum::response::Response;
use std::thread::sleep;

#[axum::debug_handler]
pub async fn get() -> Response<Full<Bytes>> {
    sleep(std::time::Duration::from_secs(3));
    let body = Full::from(assets::hasui_mountains_jpeg());
    Response::builder()
        .header("Content-Type", "image/jpeg")
        .body(body)
        .unwrap()
}
