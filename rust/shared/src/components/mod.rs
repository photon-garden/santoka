pub mod show_if_scrolled;
pub use self::show_if_scrolled::*;

pub struct BrowserComponent<Props = ()>
where
    Props: serde::Serialize,
{
    pub name: &'static str,
    pub props: Props,
}
