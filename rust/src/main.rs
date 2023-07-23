#![allow(non_snake_case, non_upper_case_globals)]
use axum::{routing::get, Router};
use std::net::SocketAddr;
use std::{env, fs};

mod assets;
mod database;
mod extensions;
mod prelude;
mod routes;

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
        .route("/main.css", get(routes::main_css::get))
        .route(
            "/hasui-mountains.jpeg",
            get(routes::hasui_mountains_jpeg::get),
        );

    let address = SocketAddr::from(([127, 0, 0, 1], 3000));

    axum::Server::bind(&address)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

fn build() {
    fs::remove_dir_all("target/built_app").unwrap();
    fs::create_dir("target/built_app").unwrap();
    fs::write("target/built_app/index.html", routes::render_get()).unwrap();
    fs::copy(assets::built_css_path(), "target/built_app/main.css").unwrap();
    fs::copy(
        assets::hasui_mountains_jpeg_path(),
        "target/built_app/hasui-mountains.jpeg",
    )
    .unwrap();
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
