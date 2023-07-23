#![allow(non_snake_case, non_upper_case_globals)]

use axum::{routing::get, Router};
use std::net::SocketAddr;
use std::{env, fs};

pub mod assets;
pub mod database;
pub mod extensions;
pub mod manifest;
pub mod prelude;
pub mod routes;

use prelude::*;

#[tokio::main]
async fn main() {
    match get_mode() {
        Mode::Dev => dev().await,
        Mode::Build => build(),
    }
}

async fn dev() {
    let app = Router::new()
        .route("/", get(routes::get))
        .route(
            &assets.main_css.url.with_leading_slash(),
            get(routes::main_css::get),
        )
        .route(
            &assets.hasui_light_jpeg.url.with_leading_slash(),
            get(routes::hasui_light_jpeg::get),
        )
        .route(
            &assets.hasui_dark_jpeg.url.with_leading_slash(),
            get(routes::hasui_dark_jpeg::get),
        )
        .route(
            &assets.browser_js.url.with_leading_slash(),
            get(routes::browser_js::get),
        )
        .route(
            &assets.browser_bg_wasm.url.with_leading_slash(),
            get(routes::browser_bg_wasm::get),
        )
        .route("/build-time", get(routes::build_time::get));

    let address = SocketAddr::from(([127, 0, 0, 1], 3000));

    axum::Server::bind(&address)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

fn build() {
    let built_dir = manifest::dir().join("built");

    if let Err(error) = fs::remove_dir_all(&built_dir) {
        println!("Error removing ./built folder: {}", error);
    }

    fs::create_dir(&built_dir).unwrap();

    let index_html_built_path = built_dir.join("index.html");
    fs::write(index_html_built_path, routes::render_get()).unwrap();

    let main_css_built_path = built_dir.join(assets.main_css.url);
    fs::copy(assets.main_css.absolute_path(), main_css_built_path).unwrap();

    let hasui_light_jpeg_built_path = built_dir.join(assets.hasui_light_jpeg.url);
    fs::write(hasui_light_jpeg_built_path, assets.hasui_light_jpeg.bytes).unwrap();

    let hasui_dark_jpeg_built_path = built_dir.join(assets.hasui_dark_jpeg.url);
    fs::write(hasui_dark_jpeg_built_path, assets.hasui_dark_jpeg.bytes).unwrap();

    // todo!("Handle browser js and wasm.");
}

fn get_mode() -> Mode {
    let args: Vec<String> = env::args().collect();

    let arg = args[1].as_str();

    match arg {
        "build" => Mode::Build,
        "dev" => Mode::Dev,
        _ => panic!("Pass either 'dev' or 'build' as an arg."),
    }
}

enum Mode {
    Dev,
    Build,
}

pub static build_time: &str = include_str!("../target/build_time.txt");
