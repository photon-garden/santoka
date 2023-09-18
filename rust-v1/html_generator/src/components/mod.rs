use dioxus::prelude::*;

pub fn MainJs(cx: Scope) -> Element {
    dbg!("MainJs");
    let contents = include_str!("../main.js");
    cx.render(rsx!( script { "type": "module", dangerous_inner_html: "{contents}" } ))
}
