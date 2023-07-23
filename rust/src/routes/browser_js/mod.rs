use crate::prelude::*;
use axum::response::Response;

#[axum::debug_handler]
pub async fn get() -> Response<String> {
    Response::builder()
        .header("Content-Type", "application/javascript")
        .body(assets.browser_js.contents.to_string())
        .unwrap()
}
