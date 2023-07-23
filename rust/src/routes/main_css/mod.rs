use axum::response::Response;

use crate::assets;

pub async fn get() -> Response<String> {
    Response::builder()
        .header("Content-Type", "text/css")
        .body(assets::built_css())
        .unwrap()
}
