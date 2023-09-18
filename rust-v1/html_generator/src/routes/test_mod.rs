// use dioxus::prelude::*;

// pub fn render() -> String {
//     // create a VirtualDom with the app component
//     let mut app = VirtualDom::new(App);

//     // rebuild the VirtualDom before rendering
//     let _ = app.rebuild();

//     // render the VirtualDom to HTML
//     dioxus_ssr::render(&app)
// }

// fn App(cx: Scope) -> Element {
//     let todos = vec![Todo {
//         text: "Do the thing".to_string(),
//     }];

//     use_shared_state_provider(cx, || todos);
//     cx.render(rsx!(Todos {}))
// }

// #[derive(PartialEq, Clone)]
// pub struct Todo {
//     text: String,
// }

// fn Todos(cx: Scope) -> Element {
//     let todos = use_shared_state::<Vec<Todo>>(cx).unwrap();
//     let todos = todos.read();

//     cx.render(rsx!(
//         ul {
//             for todo in todos.iter() {
//                 Todo { todo: todo }
//             }
//         }
//     ))
// }

// #[inline_props]
// fn Todo<'todo>(cx: Scope, todo: &'todo Todo) -> Element {
//     cx.render(rsx!(
//         li { class: "todo", span { class: "todo-text", "{todo.text}" } }
//     ))
// }

/*
Hi folks! Question about lifetimes and context. I'm using Dioxus to generate a static site (so effectively doing SSR, just at build time). I have a bit of state that I want to keep in context: my list of to-dos.

Here's the root of my UI, an App component where I set up the context.
fn App(cx: Scope) -> Element {
    let todos = vec![Todo {
        text: "Do the thing".to_string(),
    }];

    use_shared_state_provider(cx, || todos);
    cx.render(rsx!(Todos {}))
}


And my to-do struct, super simple:
#[derive(PartialEq, Clone)]
pub struct Todo {
    text: String,
}


Here's my component that pulls the list of to-dos and renders them:
fn Todos(cx: Scope) -> Element {
    let todos = use_shared_state::<Vec<Todo>>(cx).unwrap();
    let todos = todos.read();

    cx.render(rsx!(
        ul {
            for todo in todos.iter() {
                Todo { todo: todo }
            }
        }
    ))
}


And finally my to-do component:
#[inline_props]
fn Todo<'todo>(cx: Scope, todo: &'todo Todo) -> Element {
    cx.render(rsx!(
        li { class: "todo", span { class: "todo-text", "{todo.text}" } }
    ))
}


Here's the issue. I'm getting an error in my Todos component:
cannot return reference to local data todos
returns a reference to data owned by the current function
Any advice?
 */
