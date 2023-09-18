use dioxus::prelude::*;

#[inline_props]
pub fn NotFound(cx: Scope, segments: Vec<String>) -> Element {
    // We're just logging this because we don't want to rename segments to _segments
    // (this confuses the Dioxus router), and we don't want the unused argument warning.
    dbg!(&segments);
    render! {
        h1 { "404" }
        p { "Page not found." }
    }
}
