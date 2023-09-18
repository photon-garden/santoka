use crate::prelude::*;
use dioxus::prelude::*;
// use serde::Serialize;

mod test_mod;

pub fn get() -> String {
    // create a VirtualDom with the app component
    let mut app = VirtualDom::new(App);

    // rebuild the VirtualDom before rendering
    let _ = app.rebuild();

    // render the VirtualDom to HTML
    dioxus_ssr::render(&app)
}

fn App(cx: Scope) -> Element {
    render!(
        Layout { title: "Taneda Santōka", Body {} }
    )
}

fn Body(cx: Scope) -> Element {
    dbg!("Body");
    render!(
        main { class: "relative p-4 lg:p-8 flex flex-col gap-8 lg:gap-32 w-full max-w-screen-2xl",
            HeroSection {}
            PoetrySection {}
        }
    )
}

// #[derive(Props)]
// struct RenderBrowserComponentProps<BrowserComponentProps>
// where
//     BrowserComponentProps: Serialize,
// {
//     class: Option<&'static str>,
//     component: BrowserComponent<BrowserComponentProps>,
//     children: Option<Element<'static>>,
// }

// fn RenderBrowserComponent<BrowserComponentProps>(
//     cx: Scope<'static, RenderBrowserComponentProps<BrowserComponentProps>>,
// ) -> Element<'static>
// where
//     BrowserComponentProps: Serialize,
// {
//     let component = &cx.props.component;
//     let serialized_props = serde_json::to_string(&component.props).unwrap();

//     render!(
//         div {
//             class: cx.props.class,
//             "data-browser-component-name": component.name,
//             "data-browser-component-props": "{serialized_props}",
//             if let Some(children) = &cx.props.children {
//                 children
//             }
//         }
//     ))
// }
