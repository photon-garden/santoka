#![allow(non_upper_case_globals)]

use gloo::console;
use miniserde::Deserialize;
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

    mount_component::<show_if_scrolled::Props>(
        show_if_scrolled::name,
        show_if_scrolled::hydrate_show_if_scrolled,
    );
    // mount_component(parallax::name, parallax::hydrate_parallax);
    // mount_component(show_hide::name, show_hide::hydrate_show_hide);

    Ok(())
}

// fn mount_component<Props: DeserializeOwned>(
fn mount_component<Props: Deserialize>(
    component_name: &'static str,
    hydrate: fn(HtmlElement, Props),
) {
    // console::log!("Mounting components named:", component_name);

    let window = web_sys::window().expect("web_sys::window() failed.");
    let document = window.document().expect("window.document() failed.");
    let class_prefix = format!("browser-component:{}:", component_name);
    let selector = format!("[class *= \"{}\"]", class_prefix);

    let elements: Vec<_> = document
        .query_selector_all(&selector)
        .expect("document.query_selector_all() failed.")
        .into_iter()
        .map(|node| node.dyn_into::<HtmlElement>().unwrap())
        .collect();

    if elements.is_empty() {
        console::warn!(
            "Trying to hydrate components named",
            component_name,
            "but no elements were found for the selector:",
            &selector
        );
    }

    for element in elements {
        // These expects shouldn't panic because we're specifically querying for elements with the class prefix.
        let class_attribute = element
            .get_attribute("class")
            .expect("Couldn't get class attribute.");
        let component_class = class_attribute
            .split(' ')
            .find(|class| class.starts_with(&class_prefix))
            .expect("Couldn't find class.");

        let json_props = component_class.replace(&class_prefix, "");
        let maybe_props = miniserde::json::from_str::<Props>(&json_props);
        match maybe_props {
            Ok(props) => {
                hydrate(element, props);
            }
            Err(err) => {
                console::error!("Parsing props for component {}", component_name, "failed.");
                console::error!("Element:", element);
                console::error!("Props:", &json_props);
                console::error!("Error:", &err.to_string());
            }
        }
    }
}
