use miniserde::{Deserialize, Serialize};

pub static name: &str = "browser-component:append-html";
static trigger_name: &str = "browser-component:append-html:trigger";
static append_after_name: &str = "browser-component:append-html:append-after";

#[cfg(feature = "browser")]
pub use self::browser::*;

#[cfg(feature = "server")]
pub use self::server::*;

#[derive(Serialize, Deserialize)]
pub struct Props {
    load_html_from: String,
}

#[cfg(feature = "browser")]
pub mod browser {
    use std::cell::Cell;

    use super::*;
    use crate::prelude::*;
    use gloo::console;
    use gloo::events::EventListener;
    use web_sys::HtmlElement;

    pub fn hydrate_append_html(target_element: HtmlElement) {}
}

#[cfg(feature = "server")]
pub mod server {
    use super::*;
    use crate::server::*;
    use dioxus::prelude::*;

    #[derive(PartialEq, Clone)]
    pub struct AppendHtml {
        load_html_from: String,
    }

    #[derive(Props)]
    pub struct ContainerProps<'a> {
        append_html: AppendHtml,
        #[props(default = "")]
        class: &'static str,
        children: Element<'a>,
    }

    pub fn AppendHtmlContainer<'a>(cx: Scope<'a, ContainerProps<'a>>) -> Element<'a> {
        let props = Props {
            load_html_from: cx.props.append_html.load_html_from.clone(),
        };

        let browser_component = crate::server::BrowserComponent { name, props };

        render!(
            RenderBrowserComponent {
                class: "append-html {cx.props.class}",
                component: browser_component,
                element_name: ElementName::Div,
                &cx.props.children
            }
        )
    }

    impl AppendHtml {
        pub fn new(load_html_from: String) -> AppendHtml {
            AppendHtml { load_html_from }
        }

        pub fn trigger(&self) -> &'static str {
            trigger_name
        }

        pub fn append_after(&self) -> &'static str {
            append_after_name
        }
    }
}
