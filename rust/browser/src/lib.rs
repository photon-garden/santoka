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

    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");
    let show_if_scrolled = body
        .query_selector(".script\\:show-if-scrolled")
        .expect("query_selector failed.")
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

    Ok(())
}
