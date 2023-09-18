pub mod parallax;
pub use self::parallax::*;

pub mod show_if_scrolled;
pub use self::show_if_scrolled::*;

pub mod show_hide;
pub use self::show_hide::*;

// pub struct BrowserComponent<Props = ()>
// where
//     Props: serde::Serialize,
// {
//     pub name: &'static str,
//     pub props: Props,
// }
