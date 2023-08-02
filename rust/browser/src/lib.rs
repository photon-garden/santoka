#![allow(non_upper_case_globals)]

use gloo::console;
use gloo::events::EventListener;
use prelude::*;
use wasm_bindgen::prelude::*;
use web_sys::{Element, Event};

#[cfg(feature = "dev")]
mod dev;
mod extensions;
mod prelude;

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

    let mut show_or_hide_element_based_on_scroll_position = move || {
        let threshold = 100.0;
        let scroll_y = window.scroll_y().unwrap();

        if scroll_y >= threshold && !showing {
            showing = true;
            show_if_scrolled.show();
            return;
        }

        if scroll_y < threshold && showing {
            showing = false;
            show_if_scrolled.hide();
        }
    };

    // Call it once to set the initial state.
    show_or_hide_element_based_on_scroll_position();

    EventListener::new(&document, "scroll", move |_: &Event| {
        show_or_hide_element_based_on_scroll_position();
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
