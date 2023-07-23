mod utils;

use wasm_bindgen::prelude::*;

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
    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");

    // Manufacture the element we're gonna append.
    let element = document.create_element("p")?;
    element.set_inner_html("Hello from Rust!");

    body.append_child(&element)?;

    Ok(())
}
