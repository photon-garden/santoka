#![allow(non_upper_case_globals)]

use prelude::*;
// use serde::de::DeserializeOwned;
use shared::prelude::*;
use web_sys::HtmlElement;

#[cfg(feature = "dev")]
mod dev;
mod prelude;

// #[wasm_bindgen]
// extern "C" {
//     // JS alert function.
//     fn alert(s: &str);
// }

// Callable from JS.
// #[wasm_bindgen]
// pub fn greet() {
//     alert("Hello!");
// }

// Called when the wasm module is instantiated.
#[wasm_bindgen(start)]
fn main() -> Result<(), JsValue> {
    #[cfg(feature = "dev")]
    dev::main();

    mount_component(show_if_scrolled::name, hydrate_show_if_scrolled);
    mount_component(parallax::name, hydrate_parallax);
    mount_component(show_hide::name, hydrate_show_hide);

    Ok(())
}

// fn mount_component<Props: DeserializeOwned>(
fn mount_component(component_name: &'static str, hydrate: fn(HtmlElement)) {
    // console::log!("Mounting components named:", component_name);

    let window = web_sys::window().expect("web_sys::window() failed.");
    let document = window.document().expect("window.document() failed.");

    let elements = document.find_child_elements_with_name(component_name);

    for element in elements {
        // let serialized_props = element
        //     .get_attribute("data-browser-component-props")
        //     .expect("element.get_attribute() failed.");
        // let deserialized_props: Props =
        //     serde_json::from_str(&serialized_props).expect("serde_json::from_str() failed.");
        // hydrate(element, deserialized_props);
        hydrate(element);
    }
}
