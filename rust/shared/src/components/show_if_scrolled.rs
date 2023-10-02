use super::BrowserComponent;
use gloo::console;

pub static name: &str = "show-if-scrolled";

#[cfg(feature = "browser")]
pub use self::browser::*;

#[cfg(feature = "server")]
pub use self::server::*;

pub type Props = ();
pub type ShowIfScrolled = BrowserComponent<Props>;

#[cfg(feature = "browser")]
pub mod browser {
    use super::*;
    use crate::prelude::*;
    use gloo::events::EventListener;
    use web_sys::{Event, HtmlElement};

    // pub fn hydrate_show_if_scrolled(target_element: Element, _props: Props) {
    pub fn hydrate_show_if_scrolled(target_element: HtmlElement, _props: Props) {
        console::log!("hydrating show_if_scrolled");
        let window = web_sys::window().expect("web_sys::window() failed.");
        let document = window.document().expect("window.document() failed.");

        let mut showing = true;

        let mut show_or_hide_element_based_on_scroll_position = move || {
            let threshold = 100.0;
            let scroll_y = window.scroll_y().unwrap();

            if scroll_y >= threshold && !showing {
                showing = true;
                target_element.show();
                return;
            }

            if scroll_y < threshold && showing {
                showing = false;
                target_element.hide();
            }
        };

        // Call it once to set the initial state.
        show_or_hide_element_based_on_scroll_position();

        EventListener::new(&document, "scroll", move |_: &Event| {
            show_or_hide_element_based_on_scroll_position();
        })
        .forget();
    }
}

#[cfg(feature = "server")]
pub mod server {
    use super::*;

    pub fn show_if_scrolled() -> String {
        ShowIfScrolled {
            name: name.to_string(),
            props: (),
        }
        .to_class()
    }
}
