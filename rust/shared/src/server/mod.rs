use dioxus::prelude::*;
use miniserde::Serialize;

pub struct BrowserComponent<Props = ()>
where
    Props: miniserde::Serialize,
{
    pub name: &'static str,
    pub props: Props,
}

#[derive(Props)]
pub struct RenderBrowserComponentProps<'a, BrowserComponentProps>
where
    BrowserComponentProps: Serialize,
{
    #[props(default = "")]
    class: &'a str,
    component: BrowserComponent<BrowserComponentProps>,
    element_name: ElementName,
    children: Option<Element<'a>>,
}

pub enum ElementName {
    Div,
    Button,
}

pub fn RenderBrowserComponent<'a, BrowserComponentProps>(
    cx: Scope<'a, RenderBrowserComponentProps<'a, BrowserComponentProps>>,
) -> Element<'a>
where
    BrowserComponentProps: Serialize,
{
    let component = &cx.props.component;
    let serialized_props = miniserde::json::to_string(&component.props);

    match &cx.props.element_name {
        ElementName::Div => {
            render!(
                div {
                    class: cx.props.class,
                    "data-browser-component-name": component.name,
                    "data-browser-component-props": "{serialized_props}",
                    if let Some(children) = &cx.props.children {
                        children
                    }
                }
            )
        }

        ElementName::Button => {
            render!(
                button {
                    class: cx.props.class,
                    "data-browser-component-name": component.name,
                    "data-browser-component-props": "{serialized_props}",
                    if let Some(children) = &cx.props.children {
                        children
                    }
                }
            )
        }
    }
}
