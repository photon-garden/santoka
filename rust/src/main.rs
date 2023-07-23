#![allow(non_snake_case, non_upper_case_globals)]
use axum::{routing::get, Router};
use std::net::SocketAddr;
use std::path::Path;
use std::{env, fs};

pub mod assets;
pub mod database;
pub mod extensions;
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
            &assets.main_css.url_with_leading_slash(),
            get(routes::main_css::get),
        )
        .route(
            &assets.hasui_light_jpeg.url_with_leading_slash(),
            get(routes::hasui_light_jpeg::get),
        )
        .route(
            &assets.hasui_dark_jpeg.url_with_leading_slash(),
            get(routes::hasui_dark_jpeg::get),
        );

    let address = SocketAddr::from(([127, 0, 0, 1], 3000));

    axum::Server::bind(&address)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

fn build() {
    let built_dir = "built";

    if let Err(error) = fs::remove_dir_all(built_dir) {
        println!("Error removing ./built folder: {}", error);
    }

    fs::create_dir(built_dir).unwrap();

    let index_html_built_path = Path::new(built_dir).join("index.html");
    fs::write(index_html_built_path, routes::render_get()).unwrap();

    let main_css_built_path = Path::new(built_dir).join(assets.main_css.url);
    fs::copy(assets.main_css.path, main_css_built_path).unwrap();

    let hasui_light_jpeg_built_path = Path::new(built_dir).join(assets.hasui_light_jpeg.url);
    fs::copy(assets.hasui_light_jpeg.path, hasui_light_jpeg_built_path).unwrap();

    let hasui_dark_jpeg_built_path = Path::new(built_dir).join(assets.hasui_dark_jpeg.url);
    fs::copy(assets.hasui_dark_jpeg.path, hasui_dark_jpeg_built_path).unwrap();
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
