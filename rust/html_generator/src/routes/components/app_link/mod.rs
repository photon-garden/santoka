use crate::routes::prelude::*;

#[derive(Props)]
pub struct LinkProps<'a> {
    to: Option<Route>,
    #[props(default = "".to_string())]
    class: String,
    children: Element<'a>,
}

pub fn AppLink<'a>(cx: Scope<'a, LinkProps<'a>>) -> Element {
    dbg!("Link");
    let props = cx.props;

    match &props.to {
        Some(to) => {
            render!(
                Link { class: "{props.class} {link_classes()}", to: to.clone(), &props.children }
            )
        }

        None => {
            render!(
                a {
                    class: "{props.class} {link_classes()}",
                    href: "javascript:void(0);",
                    &props.children
                }
            )
        }
    }
}
