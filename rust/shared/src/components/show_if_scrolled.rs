pub static show_if_scrolled_class_name: &str = "script:show-if-scrolled";

#[cfg(feature = "browser")]
pub use self::browser::browser_show_if_scrolled;

#[cfg(feature = "server")]
pub use self::server::server_show_if_scrolled;

#[cfg(feature = "browser")]
pub mod browser {
    use crate::prelude::*;
    use gloo::events::EventListener;
    use web_sys::{Element, Event};

    pub fn browser_show_if_scrolled(target_element: Element) {
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
    use super::show_if_scrolled_class_name;

    pub fn server_show_if_scrolled() -> &'static str {
        show_if_scrolled_class_name
    }
}
