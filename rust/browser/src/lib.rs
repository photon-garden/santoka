#![allow(non_upper_case_globals)]

use chrono::{DateTime, Local};
use gloo::console::log;
use gloo::history::{BrowserHistory, History};
use gloo::net::http::Request;
use gloo::timers::callback::Interval;
use once_cell::sync::OnceCell;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::spawn_local;

mod utils;

#[wasm_bindgen]
extern "C" {
    // JS alert function.
    fn alert(s: &str);
}

// Callable from JS.
#[wasm_bindgen]
pub fn greet() {
    alert("Hello, browser boi!!");
}

// Called when the wasm module is instantiated.
#[wasm_bindgen(start)]
fn main() -> Result<(), JsValue> {
    utils::set_panic_hook();

    Interval::new(1_000, || {
        spawn_local(async {
            check_for_updates().await;
        })
    })
    .forget();

    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    // let window = web_sys::window().expect("no global `window` exists");
    // let document = window.document().expect("should have a document on window");
    // let body = document.body().expect("document should have a body");

    // // Manufacture the element we're gonna append.
    // let element = document.create_element("p")?;
    // element.set_inner_html("Hello from Rust!");

    // body.append_child(&element)?;

    Ok(())
}

static original_build_time_cell: OnceCell<DateTime<Local>> = OnceCell::new();

async fn check_for_updates() {
    log!("Checking for updates.");
    if new_version_available().await {
        // Reload page.
        BrowserHistory::new().go(0);
    }
}

async fn new_version_available() -> bool {
    let maybe_most_recent_build_time = get_most_recent_build_time().await;
    match maybe_most_recent_build_time {
        Ok(most_recent_build_time) => {
            // log!("Original build time:", original_build_time.to_string());
            // log!(
            //     "Most recent server build time:",
            //     most_recent_build_time.to_string()
            // );
            let original_build_time =
                original_build_time_cell.get_or_init(|| most_recent_build_time);
            most_recent_build_time > *original_build_time
        }
        Err(error) => {
            log!(
                "Error getting most recent build time. The server might be rebuilding. Error message:",
                error.to_string()
            );
            false
        }
    }
}

async fn get_most_recent_build_time() -> Result<DateTime<Local>, gloo::net::Error> {
    let response = Request::get("/build-time").send().await?;

    if !response.ok() {
        let status_code = response.status();
        let error_message = format!("Response not ok. Status code {}.", status_code);
        let error = gloo::net::Error::GlooError(error_message);
        return Err(error);
    }

    let unparsed = response.text().await?;
    let most_recent_build_time = DateTime::parse_from_rfc3339(&unparsed)
        .expect("Couldn't parse build time from server.")
        .into();
    Ok(most_recent_build_time)
}
