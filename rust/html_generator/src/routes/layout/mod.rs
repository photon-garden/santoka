use crate::routes::prelude::*;

#[inline_props]
pub fn Layout(cx: Scope) -> Element {
    render! {
        head {
            meta { charset: "UTF-8" }
            meta { content: "width=device-width, initial-scale=1.0", name: "viewport" }
            meta { http_equiv: "X-UA-Compatible", content: "ie=edge" }
            link { rel: "stylesheet", href: "main.css" }
        }

        body { class: "{bg_background()} flex flex-col items-center selection:bg-neutral-200/75 dark:selection:bg-neutral-700/75",
            FloatingNav {}
            // nav { class: "flex gap-2 p-2 items-center justify-center w-full",
            //     Link { to: Route::Home {}, "Home" }
            //     Link { to: Route::Contact {}, "Contact" }
            // }
            Outlet::<Route> {}
            MainJs {}
        }
    }
}

fn FloatingNav(cx: Scope) -> Element {
    dbg!("FloatingNav");
    render!(
        div {
            //
            class: "
                cover-nav
                z-20
                absolute
                -top-32 left-0
                w-screen
                p-32
                {bg_background()}
            "
        }

        nav {
            //
            class: "
                fixed top-0 z-10
                {horizontal_center_fixed()}
                w-full max-w-screen-2xl 
                pointer-events-none
                px-4 lg:px-8
                text-base lg:text-2xl tracking-wide
                {show_if_scrolled()}
            ",

            div {
                // We use this extra div to prevent text from showing up once it has scrolled
                // up past the nav.
                class: "
                    vertical-spacer
                    pt-4 lg:pt-8
                    lg:w-1/4
                    lg:rounded-b-3xl
                    shadow-neutral-50 dark:shadow-neutral-900
                    {bg_background()}
                ",

                style: "box-shadow: var(--tw-shadow-color) 0px 0px 0 2px;",

                div {
                    //
                    class: "
                    logo-and-links 
                    bg-[linear-gradient(90deg,_#e6edee,_#98b7ca)]
                    dark:bg-[linear-gradient(90deg,#5b6f76,#212123)]
                    overflow-hidden rounded-3xl 
                    p-4
                    w-full
                    flex flex-row gap-4 justify-between 
                    pointer-events-auto
                    select-none
                ",
                    NavLogo {}
                    NavLinks { class: "" }
                }
            }
        }
    )
}

fn MainJs(cx: Scope) -> Element {
    dbg!("MainJs");
    let contents = include_str!("../../main.js");
    render! { script { "type": "module", dangerous_inner_html: "{contents}" } }
}

pub fn NavLogo(cx: Scope) -> Element {
    dbg!("NavLogo");
    render!(a {
        class: "
                logo
                block rounded-full
                w-6 lg:w-8 h-6 lg:h-8
                bg-neutral-50 dark:bg-neutral-300
                cursor-pointer
            ",
        href: ""
    })
}

#[inline_props]
pub fn NavLinks(cx: Scope, class: &'static str) -> Element {
    dbg!("NavLinks");
    render!(
        div {
            //
            class: "
                links
                flex flex-row gap-4
                font-light lg:font-normal
                text-neutral-100 dark:text-neutral-300
                {class}
            ",
            AppLink { to: Route::Home, class: "tracking-wide".into(), "about" }
            AppLink { to: Route::Home, class: "tracking-wide".into(), "data + code" }
        }
    )
}
