use crate::prelude::*;
use axum::response::Html;
use dioxus::prelude::*;

pub mod browser_bg_wasm;
pub mod browser_js;
pub mod build_time;
pub mod hasui_dark_jpeg;
pub mod hasui_light_jpeg;
pub mod main_css;

type Element = LazyNodes<'static, 'static>;

#[axum::debug_handler]
pub async fn get() -> Html<String> {
    Html(render_get())
}

pub fn render_get() -> String {
    dioxus_ssr::render_lazy(App())
}

fn App() -> Element {
    rsx!(Layout("Taneda Santōka", Body()))
}

fn Layout(title: &'static str, body: Element) -> Element {
    rsx!(
        head {
            meta { charset: "UTF-8" }
            meta { content: "width=device-width, initial-scale=1.0", name: "viewport" }
            meta { http_equiv: "X-UA-Compatible", content: "ie=edge" }
            link { rel: "stylesheet", href: "main.css" }
            title { "{title}" }
        }
        body { class: "bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center selection:bg-neutral-200/75 dark:selection:bg-neutral-700/75",
            Nav(),
            body,
            BrowserScript()
        }
    )
}

fn Nav() -> Element {
    rsx!(
        nav {
            //
            class: "
                fixed top-8 z-10
                {horizontal_center_fixed()}
                w-full max-w-screen-2xl 
                px-8
                text-2xl tracking-wide text-neutral-100 dark:text-neutral-200
            ",
            div {
                //
                class: "
                    logo-and-links bg-[pink] overflow-hidden rounded-3xl w-1/4
                    p-4
                    flex flex-row gap-4 justify-between 
                ",
                a {
                    class: "logo block rounded-full bg-neutral-50 dark:bg-neutral-300 w-8 h-8 cursor-pointer",
                    href: ""
                }
                div { class: "links flex flex-row gap-4 font-normal",
                    Link("", "about", "!decoration-2 tracking-wide"),
                    Link("", "data + code", "!decoration-2 tracking-wide")
                }
            }
        }
    )
}

fn horizontal_center_fixed() -> &'static str {
    "left-1/2 transform -translate-x-1/2"
}

fn Body() -> Element {
    rsx!(
        main { class: "relative p-8 flex flex-col gap-32 w-full max-w-screen-2xl",
            HeroSection(),
            PoetrySection()
        }
    )
}

fn HeroSection() -> Element {
    rsx!(
        section {
            id: "hero",
            class: "
                flex flex-col justify-start items-start dark:justify-end overflow-hidden relative w-full h-[720px] rounded-3xl selection:bg-neutral-700/75 dark:selection:bg-neutral-500/75
                tracking-wide text-neutral-100 dark:text-neutral-200
                z-20
            ",

            nav {
                //
                class: "
                    logo-and-links absolute p-8 top-0 left-0 w-full 
                    flex flex-row gap-4 justify-between 
                    text-2xl tracking-wide text-neutral-100 dark:text-neutral-200
                    z-10
                ",
                a {
                    class: "logo block rounded-full bg-neutral-50 dark:bg-neutral-300 w-8 h-8 cursor-pointer",
                    href: ""
                }
                div { class: "links flex flex-row gap-4 font-normal",
                    Link("", "about", "!decoration-2 tracking-wide"),
                    Link("", "data + code", "!decoration-2 tracking-wide")
                }
            }

            // Light mode image.
            img {
                alt: "Clouds and a red mountain in the distance, with darker mountains in the midground. Water and grass is in the foreground.",
                class: "shrink-0 min-w-full min-h-full object-cover blur-lg dark:hidden select-none",
                style: "image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;",
                src: assets.hasui_light_jpeg.lqip
            }
            img {
                alt: "Clouds and a red mountain in the distance, with darker mountains in the midground. Water and grass is in the foreground.",
                class: "absolute min-w-full min-h-full object-cover dark:hidden select-none",
                src: assets.hasui_light_jpeg.url
            }

            // Dark mode image.
            img {
                alt: "A dark, rainswept village at night. Shadows of trees in the distance, but a few lights are on in the village.",
                class: "shrink-0 min-w-full min-h-full object-cover blur-lg hidden dark:block select-none",
                style: "image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;",
                src: assets.hasui_dark_jpeg.lqip
            }
            img {
                alt: "A dark, rainswept village at night. Shadows of trees in the distance, but a few lights are on in the village.",
                class: "absolute min-w-full min-h-full object-cover hidden dark:block select-none",
                src: assets.hasui_dark_jpeg.url
            }

            div { class: "absolute bottom-0 left-0 flex flex-col gap-1 p-8",
                span {
                    id: "name-in-kanji",
                    class: "text-7xl font-semibold tracking-wide whitespace-nowrap",
                    "種田山頭火"
                }
                span {
                    id: "name-in-romaji",
                    class: "text-4xl font-normal tracking-wide whitespace-nowrap",
                    "Taneda Santōka"
                }
                span {
                    id: "birth-and-death",
                    class: "text-3xl font-normal tracking-wide whitespace-nowrap",
                    "1882 – 1940"
                }
            }
        }
    )
}

fn PoetrySection() -> Element {
    rsx!(
        section { id: "poems", class: "flex flex-col gap-32",
            for publication in database.publications.iter() {
                PoemsAndPublication(publication)
            }
        }
    )
}

fn PoemsAndPublication(publication: &'static Publication) -> Element {
    rsx!(
        div { class: "poems-and-publication flex flex-row gap-12",
            Publication(publication),
            PoemsInPublication(publication)
        }
    )
}

fn Publication(publication: &'static Publication) -> Element {
    let translator = database.get_translator(publication.translator_id);

    // a { class: "underline decoration-1 underline-offset-4 cursor-pointer",
    //     "hide"
    // }
    rsx!(
        // self-start is necessary to make sticky work.
        div { class: "publication sticky top-32 self-start flex flex-col text-neutral-400 dark:text-neutral-500 items-end w-1/4 text-right",
            span { class: "translator font-extralight text-3xl", "Translated by {translator.name}" }
            span { class: "publication-name font-thin italic text-2xl", "{publication.name}" }
            span { class: "publication-year font-thin text-2xl",
                "{publication.year_or_unknown()} • "
                Link("", "hide", "")
            }
        }
    )
}

fn PoemsInPublication(publication: &'static Publication) -> Element {
    rsx!(
        div { class: "poems-in-publication flex flex-col gap-24 w-2/3",
            for poem in publication.poems().into_iter() {
                Poem(poem)
            }
        }
    )
}

fn Poem(poem: &'static Poem) -> Element {
    let english_text = poem.english_text.replace("—\n", "—");
    let japanese_text = poem.japanese_text_or_default(); //.replace('\n', "<br>");

    rsx!(
        div { class: "poem flex flex-col gap-2",
            span { class: "poem-english-text text-3xl font-light lowercase text-neutral-500 dark:text-neutral-400",
                "{english_text}"
            }
            span { class: "poem-japanese-text text-3xl font-extralight lowercase italic text-neutral-400 dark:text-neutral-500",
                "{japanese_text}"
            }
        }
    )
}

fn Controls() -> Element {
    rsx!(
        div { class: "controls-container fixed bottom-0 flex flex-row justify-end w-full max-w-screen-2xl px-8 py-4 pr-12",
            div { class: "controls flex flex-row gap-4 bg-neutral-100 dark:bg-neutral-800 rounded-3xl px-4 py-2 border border-neutral-200 dark:border-neutral-700",
                a {
                    class: "about text-base text-neutral-400 dark:text-neutral-500 font-light underline decoration-1 underline-offset-4",
                    href: "",
                    "about"
                }
                a {
                    class: "about text-base text-neutral-400 dark:text-neutral-500 font-light underline decoration-1 underline-offset-4",
                    href: "",
                    "data + code"
                }
                a {
                    class: "about text-base text-neutral-400 dark:text-neutral-500 font-light underline decoration-1 underline-offset-4",
                    href: "",
                    "home"
                }
            }
        }
    )
}

fn BrowserScript() -> Element {
    let contents = include_str!("../boot_browser.js");
    rsx!( script { "type": "module", "{contents}" } )
}

fn Link(href: &'static str, content: &'static str, classes: &'static str) -> Element {
    rsx!(
        a {
            class: "underline decoration-1 underline-offset-4 cursor-pointer {classes}",
            href: href,
            "{content}"
        }
    )
}
