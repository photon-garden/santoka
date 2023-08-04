use axum::response::Response;

#[axum::debug_handler]
pub async fn get() -> Response<String> {
    Response::builder()
        .header("Content-Type", "text/plain")
        .body(crate::build_time.to_string())
        .unwrap()
}
