use crate::prelude::*;
use axum::response::Response;

pub async fn get() -> Response<String> {
    let main_css = fs::read_to_string(assets.main_css.absolute_path()).unwrap();
    Response::builder()
        .header("Content-Type", "text/css")
        .body(main_css)
        .unwrap()
}
