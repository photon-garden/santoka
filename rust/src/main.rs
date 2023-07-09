#![allow(non_snake_case, non_upper_case_globals)]
use axum::{extract::WebSocketUpgrade, response::Html, routing::get, Router};
use dioxus::prelude::*;

mod database;
mod extensions;
mod prelude;

use prelude::*;

#[tokio::main]
async fn main() {
    let addr: std::net::SocketAddr = ([127, 0, 0, 1], 3030).into();

    let view = dioxus_liveview::LiveViewPool::new();

    let app = Router::new()
        // The root route contains the glue code to connect to the WebSocket
        .route(
            "/",
            get(move || async move {
                Html(format!(
                    r#"
                <!DOCTYPE html>
                <html>
                <head> <title>Dioxus LiveView with Axum</title>  </head>
                <body> <div id="main"></div> </body>
                {glue}
                </html>
                "#,
                    // Create the glue code to connect to the WebSocket on the "/ws" route
                    glue = dioxus_liveview::interpreter_glue(&format!("ws://{addr}/ws"))
                ))
            }),
        )
        // The WebSocket route is what Dioxus uses to communicate with the browser
        .route(
            "/ws",
            get(move |ws: WebSocketUpgrade| async move {
                ws.on_upgrade(move |socket| async move {
                    // When the WebSocket is upgraded, launch the LiveView with the app component
                    _ = view.launch(dioxus_liveview::axum_socket(socket), App).await;
                })
            }),
        );

    println!("Listening on http://{addr}");

    axum::Server::bind(&addr.to_string().parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

fn App(cx: Scope) -> Element {
    let database = use_state(cx, database::load);

    cx.render(rsx! { PoemTable { database: database } })
}

#[derive(Props)]
struct PoemTableProps<'a> {
    database: &'a Database,
}

fn PoemTable<'a>(cx: Scope<'a, PoemTableProps<'a>>) -> Element<'a> {
    let database = cx.props.database;
    let forward = use_state(cx, || true);

    let poems: Box<dyn Iterator<Item = &Poem>> = if *forward.get() {
        database.poems.iter().into_box()
    } else {
        database.poems.iter().rev().into_box()
    };

    let toggle_forward = move |_| {
        let new_value = !*forward.get();
        forward.set(new_value);
    };

    let poem_trs = poems.map(|poem| cx.render(rsx! { PoemTr { database: database, poem: poem } }));

    cx.render(rsx! {
        table {

            thead {
                th { onclick: toggle_forward, "english text" }
                th { "japanese text" }
                th { "translator" }
                th { "publication" }
            }

            tbody { poem_trs }
        }
    })
}

#[derive(Props)]
struct PoemTrProps<'a> {
    database: &'a Database,
    poem: &'a Poem,
}

fn PoemTr<'a>(cx: Scope<'a, PoemTrProps<'a>>) -> Element<'a> {
    let database = cx.props.database;
    let poem = cx.props.poem;

    let english_text = &poem.english_text;
    let japanese_text = poem.japanese_text_or_default();
    let translator = database.get_translator(poem.translator_id);
    let publication = database.get_publication(poem.publication_id);

    cx.render(rsx! {
        tr {
            td { "{english_text}" }

            td { "{japanese_text}" }

            td { "{translator.name}" }

            td { "{publication.description}" }
        }
    })
}
