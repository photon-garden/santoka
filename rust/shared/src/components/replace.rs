use super::BrowserComponent;
use miniserde::{Deserialize, Serialize};

pub static name: &str = "replace";

#[cfg(feature = "browser")]
pub use self::browser::*;

#[cfg(feature = "server")]
pub use self::server::*;

#[derive(Serialize, Deserialize)]
pub struct Props {
    load_html_from: String,
}

pub type Replace = BrowserComponent<Props>;

#[cfg(feature = "browser")]
pub mod browser {
    use super::*;
    use web_sys::HtmlElement;

    pub fn hydrate_replace(target_element: HtmlElement, props: Props) {}
}

#[cfg(feature = "server")]
pub mod server {
    use super::*;

    pub fn replace(load_html_from: String) -> String {
        Replace {
            name: name.to_string(),
            props: Props { load_html_from },
        }
        .to_class()
    }
}
