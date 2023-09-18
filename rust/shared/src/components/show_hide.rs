pub static name: &str = "browser-component:show-hide";
static show_by_default_name: &str = "browser-component:show-hide:show-by-default";
static hide_by_default_name: &str = "browser-component:show-hide:hide-by-default";
static trigger_name: &str = "browser-component:show-hide:trigger";

#[cfg(feature = "browser")]
pub use self::browser::*;

#[cfg(feature = "server")]
pub use self::server::*;

pub type Props = ();

#[cfg(feature = "browser")]
pub mod browser {
    use std::cell::Cell;

    use super::*;
    use crate::prelude::*;
    use gloo::console;
    use gloo::events::EventListener;
    use web_sys::HtmlElement;

    pub fn hydrate_show_hide(target_element: HtmlElement) {
        let container = target_element;

        let elements_to_show_by_default = container
            .find_child_elements_with_name(show_by_default_name)
            .into_rc();

        let elements_to_hide_by_default = container
            .find_child_elements_with_name(hide_by_default_name)
            .into_rc();

        // let trigger = {
        //     let maybe_trigger = container.query_name_selector(trigger_name);
        //     match maybe_trigger {
        //         Some(trigger) => trigger,
        //         None => {
        //             let selector = component_name_to_selector(trigger_name);
        //             console::warn!(
        //                 "Expected a child element inside of",
        //                 container,
        //                 "that matched the selector",
        //                 selector,
        //                 "but didn't find any."
        //             );
        //             return;
        //         }
        //     }
        // };

        let triggers = {
            let triggers = container.find_child_elements_with_name(trigger_name);
            if triggers.is_empty() {
                let selector = component_name_to_selector(trigger_name);
                console::warn!(
                    "Expected at least one child element inside of",
                    container,
                    "to match the selector",
                    selector,
                    "but didn't find any."
                );
                return;
            }
            triggers
        };

        let in_default_state = Cell::new(true).into_rc();

        for trigger in triggers {
            let in_default_state = in_default_state.clone();
            let elements_to_show_by_default = elements_to_show_by_default.clone();
            let elements_to_hide_by_default = elements_to_hide_by_default.clone();

            EventListener::new(&trigger, "click", move |_event| {
                console::debug!("Toggling element.");
                let new_in_default_state = !in_default_state.get();
                in_default_state.set(new_in_default_state);

                if in_default_state.get() {
                    elements_to_show_by_default.show();
                    elements_to_hide_by_default.hide();
                } else {
                    elements_to_show_by_default.hide();
                    elements_to_hide_by_default.show();
                }
            })
            .forget();
        }
    }
}

#[cfg(feature = "server")]
pub mod server {
    use super::*;

    #[derive(PartialEq, Clone)]
    pub struct ShowHide {}

    impl ShowHide {
        pub fn new() -> ShowHide {
            ShowHide {}
        }

        pub fn container(&self) -> String {
            name.to_string()
        }

        pub fn trigger(&self) -> String {
            trigger_name.to_string()
        }

        pub fn show_by_default(&self) -> String {
            show_by_default_name.to_string()
        }

        pub fn hide_by_default(&self) -> String {
            format!("{hide_by_default_name} hidden")
        }
    }

    impl Default for ShowHide {
        fn default() -> Self {
            ShowHide::new()
        }
    }
}
