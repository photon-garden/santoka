#![allow(non_upper_case_globals)]

use prelude::*;
use shared::prelude::*;
use web_sys::Element;

#[cfg(feature = "dev")]
mod dev;
mod extensions;
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

    // load_more_poems_on_link_click();

    mount_component(show_if_scrolled_class_name, browser_show_if_scrolled);

    Ok(())
}

fn mount_component(class_name: &'static str, mount: fn(Element)) {
    let window = web_sys::window().expect("web_sys::window() failed.");
    let document = window.document().expect("window.document() failed.");

    let selector = format!(".{}", class_name).replace(':', "\\:");
    let nodes = document
        .query_selector_all(&selector)
        .expect("document.query_selector_all() failed.");

    for index in 0..nodes.length() {
        let node = nodes.get(index).expect("nodes.get() failed.");
        let element = node.dyn_into().expect("element.dyn_into() failed.");
        mount(element);
    }
}

// fn load_more_poems_on_link_click() {
//     let window = web_sys::window().expect("web_sys::window() failed.");
//     let document = window.document().expect("window.document() failed.");
//     let load_more_links = document
//         .query_selector_all(".script\\:load-more-poems")
//         .expect("document.query_selector_all() failed.");

//     console::log!(
//         "Registering event listeners for {} load more links.",
//         load_more_links.length()
//     );

//     for index in 0..load_more_links.length() {
//         let link = load_more_links
//             .get(index)
//             .expect("load_more_links.get() failed.");

//         EventListener::new(&link, "click", move |_: &Event| {
//             console::log!("Clicked load more poems link.");
//         })
//         .forget();
//     }
// }
