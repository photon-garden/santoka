use crate::{assets::ImageAsset, prelude::*};
use dioxus::prelude::*;

mod test_mod;

// type Element = LazyNodes<'static, 'static>;
// type Element = VirtualDom;

pub fn get() -> String {
    // create a VirtualDom with the app component
    let mut app = VirtualDom::new(App);

    // rebuild the VirtualDom before rendering
    let _ = app.rebuild();

    // render the VirtualDom to HTML
    dioxus_ssr::render(&app)
}

fn App(cx: Scope) -> Element {
    cx.render(rsx!(
        Layout { title: "Taneda Santōka", Body {} }
    ))
}

#[derive(Props)]
struct LayoutProps<'a> {
    title: &'static str,
    children: Element<'a>,
}

// fn Layout(title: &'static str, body: Element) -> Element {
fn Layout<'a>(cx: Scope<'a, LayoutProps<'a>>) -> Element {
    dbg!("Layout");
    cx.render(rsx!(
        head {
            meta { charset: "UTF-8" }
            meta { content: "width=device-width, initial-scale=1.0", name: "viewport" }
            meta { http_equiv: "X-UA-Compatible", content: "ie=edge" }
            link { rel: "stylesheet", href: "main.css" }
            title { "{cx.props.title}" }
        }

        body { class: "{bg_background()} flex flex-col items-center selection:bg-neutral-200/75 dark:selection:bg-neutral-700/75",
            FloatingNav {}
            &cx.props.children,
            BrowserScript {}
        }
    ))
}

fn FloatingNav(cx: Scope) -> Element {
    dbg!("FloatingNav");
    cx.render(rsx!(
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
                {server_show_if_scrolled()}
                fixed top-0 z-10
                {horizontal_center_fixed()}
                w-full max-w-screen-2xl 
                pointer-events-none
                px-4 lg:px-8
                text-base lg:text-2xl tracking-wide
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
                    NavLinks { classes: "" }
                }
            }
        }
    ))
}

fn horizontal_center_fixed() -> &'static str {
    "left-1/2 transform -translate-x-1/2"
}

fn Body(cx: Scope) -> Element {
    dbg!("Body");
    cx.render(rsx!(
        main { class: "relative p-4 lg:p-8 flex flex-col gap-8 lg:gap-32 w-full max-w-screen-2xl",
            HeroSection {}
            PoetrySection {}
        }
    ))
}

fn HeroSection(cx: Scope) -> Element {
    dbg!("HeroSection");
    cx.render(rsx!(
        section {
            id: "hero",
            class: "
                flex flex-col justify-start items-start dark:justify-end
                overflow-hidden rounded-3xl 
                relative
                w-full h-[384px] lg:h-[720px] max-h-[calc(100vh-4rem)]
                selection:bg-neutral-700/75 dark:selection:bg-neutral-500/75
                text-neutral-100 dark:text-neutral-300 tracking-wide
                z-20
            ",

            nav {
                //
                class: "
                    logo-and-links absolute p-4 lg:p-8 top-0 left-0 w-full 
                    flex flex-row gap-4 justify-between 
                    text-base lg:text-2xl tracking-wide text-neutral-100 dark:text-neutral-200
                    z-10
                ",
                NavLogo {}
                NavLinks { classes: "" }
            }

            // Light mode image.
            LightDarkImage {
                asset: &non_html_assets.images.hasui_hero,
                classes: "
                    shrink-0 min-w-full min-h-full object-cover
                    transform -scale-x-100 lg:scale-x-100 object-right lg:object-left
                "
            }

            div { class: "absolute bottom-0 left-0 flex flex-col p-4 lg:p-8",
                span {
                    id: "name-in-kanji",
                    class: "text-4xl lg:text-7xl font-semibold tracking-wide whitespace-nowrap",
                    "種田山頭火"
                }
                span {
                    id: "name-in-romaji",
                    class: "text-xl lg:text-4xl font-normal tracking-wide whitespace-nowrap",
                    "Taneda Santōka"
                }
                span {
                    id: "birth-and-death",
                    class: "text-base lg:text-3xl font-normal tracking-wide whitespace-nowrap",
                    "1882 – 1940"
                }
            }
        }
    ))
}

fn PoetrySection(cx: Scope) -> Element {
    dbg!("PoetrySection");
    cx.render(rsx!(
        section { id: "poems", class: "flex flex-col",
            for publication in database.publications.iter() {
                PoemsAndPublication { publication: publication }
            }
        }
    ))
}

#[inline_props]
fn PoemsAndPublication(cx: Scope, publication: &'static Publication) -> Element {
    dbg!("PoemsAndPublication");
    cx.render(rsx!(
        div { class: "poems-and-publication flex flex-col lg:flex-row gap-10 lg:gap-12",
            Publication { publication: publication }
            PoemsInPublication { publication: publication }
        }
    ))
}

#[inline_props]
fn Publication(cx: Scope, publication: &'static Publication) -> Element {
    dbg!("Publication");
    let translator = database.get_translator(publication.translator_id);

    // a { class: "underline decoration-1 underline-offset-4 cursor-pointer",
    //     "hide"
    // }
    cx.render(rsx!(
        // self-start is necessary to make sticky work.
        div { class: "
                publication
                sticky top-[4.5rem] lg:top-32 self-start
                py-4 lg:pt-0
                flex flex-col
                items-start lg:items-end
                w-full lg:w-1/4 
                lg:text-right
                text-neutral-400 dark:text-neutral-400 
                {bg_background()}
                border-b border-neutral-200 dark:border-neutral-700 lg:border-0
            ",
            span { class: "translator font-normal lg:font-extralight text-lg lg:text-3xl",
                "Translated by {translator.name}"
            }
            span { class: "publication-name font-light lg:font-thin italic text-sm lg:text-2xl",
                "{publication.name}"
            }
            span { class: "publication-year font-light lg:font-thin text-sm lg:text-2xl",
                "{publication.year_or_unknown()} • "
                Link { href: "", classes: "", "hide" }
            }
        }
    ))
}

#[inline_props]
fn PoemsInPublication(cx: Scope, publication: &'static Publication) -> Element {
    dbg!("PoemsInPublication");
    // We use padding-bottom instead of gap on the parent because of the way it affects the publication's
    // sticky positioning.
    cx.render(rsx!(
        div { class: "
                poems-in-publication
                flex flex-col gap-8 lg:gap-24
                lg:w-2/3
                pb-16 lg:pb-32
                text-base lg:text-3xl 
            ",
            for poem in publication.poems().into_iter().take(3) {
                Poem { poem: poem }
            }
            // bg-neutral-200 dark:bg-neutral-600
            span { class: "
                    text-neutral-400 dark:text-neutral-400
                    flex flex-row gap-2
                ",

                "⨀"

                button {
                    disabled: "true",
                    class: "
                        script-link
                        script:load-more-poems
                        tracking-wide
                        whitespace-nowrap
                        font-thin
                        w-min
                        {link_classes()}
                    ",
                    "load more"
                }
            }
        }
    ))
}

#[inline_props]
fn Poem(cx: Scope, poem: &'static Poem) -> Element {
    dbg!("Poem");
    let english_text = poem.english_text.replace("—\n", "—");
    let japanese_text = poem.japanese_text_or_default(); //.replace('\n', "<br>");

    cx.render(rsx!(
        div { class: "poem flex flex-col gap-1 lg:gap-2 lowercase ",
            span { class: "poem-english-text font-normal lg:font-light text-neutral-500 dark:text-neutral-400",
                "{english_text}"
            }
            span { class: "poem-japanese-text font-light lg:font-extralight italic text-neutral-400 dark:text-neutral-500",
                "{japanese_text}"
            }
        }
    ))
}

fn BrowserScript(cx: Scope) -> Element {
    dbg!("BrowserScript");
    let contents = include_str!("../boot_browser.js");
    cx.render(rsx!( script { "type": "module", dangerous_inner_html: "{contents}" } ))
}

#[derive(Props)]
struct LinkProps<'a> {
    href: &'static str,
    classes: &'static str,
    children: Element<'a>,
}

fn Link<'a>(cx: Scope<'a, LinkProps<'a>>) -> Element {
    dbg!("Link");
    let props = cx.props;
    cx.render(rsx!(
        a { class: "{props.classes} {link_classes()}", href: props.href, &props.children }
    ))
}

fn NavLogo(cx: Scope) -> Element {
    dbg!("NavLogo");
    cx.render(rsx!(a {
        class: "
                logo
                block rounded-full
                w-6 lg:w-8 h-6 lg:h-8
                bg-neutral-50 dark:bg-neutral-300
                cursor-pointer
            ",
        href: ""
    }))
}

#[inline_props]
fn NavLinks(cx: Scope, classes: &'static str) -> Element {
    dbg!("NavLinks");
    cx.render(rsx!(
        div {
            //
            class: "
                links
                flex flex-row gap-4
                font-light lg:font-normal
                text-neutral-100 dark:text-neutral-300
                {classes}
            ",
            Link { href: "", classes: "tracking-wide", "about" }
            Link { href: "", classes: "tracking-wide", "data + code" }
        }
    ))
}

fn bg_background() -> &'static str {
    "bg-neutral-50 dark:bg-neutral-900"
}

fn link_classes() -> &'static str {
    "underline decoration-1 underline-offset-4 cursor-pointer {classes}"
}

#[inline_props]
fn Image<'a>(cx: Scope, asset: &'a ImageAsset, classes: &'static str) -> Element<'a> {
    dbg!("Image");
    cx.render(rsx!(
        div {
            //
            class: "select-none relative {classes}",

            img {
                alt: asset.alt,
                class: "shrink-0 min-w-full min-h-full object-cover",
                style: "image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;",
                src: asset.lqip
            }

            img {
                //
                alt: asset.alt,
                class: "absolute top-0 left-0 min-w-full min-h-full object-cover",
                src: asset.src(),
                srcset: asset.srcset()
            }
        }
    ))
}

#[inline_props]
fn LightDarkImage<'a>(
    cx: Scope,
    asset: &'a LightDarkImageAsset,
    classes: &'static str,
) -> Element<'a> {
    dbg!("Image");
    cx.render(rsx!(
        div {
            //
            class: "select-none relative {classes}",

            picture {
                class: "shrink-0 min-w-full min-h-full object-cover",
                style: "image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;",

                source {
                    //
                    "media": "(prefers-color-scheme: light)",
                    "srcset": asset.light_mode.lqip,
                    "type": "image/jpeg"
                }

                source {
                    //
                    "media": "(prefers-color-scheme: dark)",
                    "srcset": asset.dark_mode.lqip,
                    "type": "image/jpeg"
                }

                img {
                    //
                    alt: asset.alt,
                    class: "shrink-0 min-w-full min-h-full object-cover",
                    src: asset.light_mode.src()
                }
            }

            picture {
                //
                class: "absolute top-0 left-0 min-w-full min-h-full object-cover",

                source {
                    //
                    "media": "(prefers-color-scheme: light)",
                    "srcset": asset.light_mode.srcset(),
                    "type": asset.light_mode.mime_type()
                }

                source {
                    //
                    "media": "(prefers-color-scheme: dark)",
                    "srcset": asset.dark_mode.srcset(),
                    "type": asset.dark_mode.mime_type()
                }

                img {
                    //
                    alt: asset.alt,
                    class: "absolute top-0 left-0 min-w-full min-h-full object-cover",
                    src: asset.light_mode.src()
                }
            }
        }
    ))
}
