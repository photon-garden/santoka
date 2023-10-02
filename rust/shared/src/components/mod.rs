pub mod replace;
#[cfg(feature = "server")]
pub use self::replace::replace;

pub mod parallax;
#[cfg(feature = "server")]
pub use self::parallax::parallax;

pub mod show_if_scrolled;
#[cfg(feature = "server")]
pub use self::show_if_scrolled::show_if_scrolled;

pub mod show_hide;
#[cfg(feature = "server")]
pub use self::show_hide::ShowHide;

use miniserde::{json, Deserialize, Serialize};

#[derive(Serialize)]
pub struct BrowserComponent<Props = ()>
where
    Props: Serialize + Deserialize,
{
    pub name: String,
    pub props: Props,
}

impl<Props> BrowserComponent<Props>
where
    Props: Serialize + Deserialize,
{
    pub fn from_class(class: &str) -> Self {
        let mut split = class.splitn(3, ':');
        let _browser_component = split.next().unwrap();
        let name = split.next().unwrap();
        let json_props = split.next().unwrap();
        let props = json::from_str(json_props).unwrap();

        Self {
            name: name.to_string(),
            props,
        }
    }

    pub fn to_class(&self) -> String {
        let json_props = json::to_string(&self.props);
        format!("browser-component:{}:{}", self.name, json_props)
    }
}
