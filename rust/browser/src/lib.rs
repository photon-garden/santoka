#![allow(non_upper_case_globals)]

use gloo::console;
use gloo::events::EventListener;
use wasm_bindgen::prelude::*;
use web_sys::Event;

#[cfg(feature = "dev")]
mod dev;

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
    #[cfg(feature = "dev")]
    dev::main();

    show_nav_if_scrolled();
    load_more_poems_on_link_click();

    Ok(())
}

// We could replace this with an html element.
fn show_nav_if_scrolled() {
    let window = web_sys::window().expect("web_sys::window() failed.");
    let document = window.document().expect("window.document() failed.");
    let body = document.body().expect("document.body() failed.");
    let show_if_scrolled = body
        .query_selector(".script\\:show-if-scrolled")
        .expect("body.query_selector() failed.")
        .expect("Couldn't find an element that matched .script:show-if-scrolled.");

    let mut showing = true;
    EventListener::new(&document, "scroll", move |_: &Event| {
        let scroll_y = window.scroll_y().unwrap();
        let classes = show_if_scrolled.class_list();
        if scroll_y <= 0.0 && showing {
            // Hide.
            showing = false;
            classes.add_1("hidden").unwrap();
            return;
        }

        // Show.
        showing = true;
        classes.remove_1("hidden").unwrap();
    })
    .forget();
}

fn load_more_poems_on_link_click() {
    let window = web_sys::window().expect("web_sys::window() failed.");
    let document = window.document().expect("window.document() failed.");
    let load_more_links = document
        .query_selector_all(".script\\:load-more-poems")
        .expect("document.query_selector_all() failed.");

    console::log!(
        "Registering event listeners for {} load more links.",
        load_more_links.length()
    );

    for index in 0..load_more_links.length() {
        let link = load_more_links
            .get(index)
            .expect("load_more_links.get() failed.");

        EventListener::new(&link, "click", move |_: &Event| {
            console::log!("Clicked load more poems link.");
        })
        .forget();
    }
}
