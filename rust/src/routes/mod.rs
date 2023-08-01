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
        body { class: "{bg_background()} flex flex-col items-center selection:bg-neutral-200/75 dark:selection:bg-neutral-700/75",
            FloatingNav(),
            body,
            BrowserScript()
        }
    )
}

fn FloatingNav() -> Element {
    rsx!(
        nav {
            //
            class: "
                script:show-if-scrolled
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
                    {bg_background()}
                ",

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
                    NavLogo(),
                    NavLinks("")
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
        main { class: "relative p-4 lg:p-8 flex flex-col gap-8 lg:gap-32 w-full max-w-screen-2xl",
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
                NavLogo(),
                NavLinks("")
            }

            // Light mode image.
            img {
                alt: "Clouds and a red mountain in the distance, with darker mountains in the midground. Water and grass is in the foreground.",
                class: "shrink-0 min-w-full min-h-full object-cover dark:hidden select-none transform -scale-x-100 lg:scale-x-100 object-right lg:object-left",
                style: "image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;",
                src: assets.hasui_light_jpeg.lqip
            }
            img {
                alt: "Clouds and a red mountain in the distance, with darker mountains in the midground. Water and grass is in the foreground.",
                class: "absolute min-w-full min-h-full object-cover dark:hidden select-none -scale-x-100 lg:scale-x-100 object-right lg:object-left",
                src: assets.hasui_light_jpeg.url
            }

            // Dark mode image.
            img {
                alt: "A dark, rainswept village at night. Shadows of trees in the distance, but a few lights are on in the village.",
                class: "shrink-0 min-w-full min-h-full object-cover hidden dark:block select-none",
                style: "image-rendering: pixelated; image-rendering: -moz-crisp-edges; image-rendering: crisp-edges;",
                src: assets.hasui_dark_jpeg.lqip
            }
            img {
                alt: "A dark, rainswept village at night. Shadows of trees in the distance, but a few lights are on in the village.",
                class: "absolute min-w-full min-h-full object-cover hidden dark:block select-none",
                src: assets.hasui_dark_jpeg.url
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
    )
}

fn PoetrySection() -> Element {
    rsx!(
        section { id: "poems", class: "flex flex-col",
            for publication in database.publications.iter() {
                PoemsAndPublication(publication)
            }
        }
    )
}

fn PoemsAndPublication(publication: &'static Publication) -> Element {
    rsx!(
        div { class: "poems-and-publication flex flex-col lg:flex-row gap-10 lg:gap-12",
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
                Link("", "hide", "")
            }
        }
    )
}

fn PoemsInPublication(publication: &'static Publication) -> Element {
    // We use padding-bottom instead of gap on the parent because of the way it affects the publication's
    // sticky positioning.
    rsx!(
        div { class: "
                poems-in-publication
                flex flex-col gap-8 lg:gap-24
                lg:w-2/3
                pb-16 lg:pb-32
                text-base lg:text-3xl 
            ",
            for poem in publication.poems().into_iter().take(3) {
                Poem(poem)
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
    )
}

fn Poem(poem: &'static Poem) -> Element {
    let english_text = poem.english_text.replace("—\n", "—");
    let japanese_text = poem.japanese_text_or_default(); //.replace('\n', "<br>");

    rsx!(
        div { class: "poem flex flex-col gap-1 lg:gap-2 lowercase ",
            span { class: "poem-english-text font-normal lg:font-light text-neutral-500 dark:text-neutral-400",
                "{english_text}"
            }
            span { class: "poem-japanese-text font-light lg:font-extralight italic text-neutral-400 dark:text-neutral-500",
                "{japanese_text}"
            }
        }
    )
}

fn BrowserScript() -> Element {
    let contents = include_str!("../boot_browser.js");
    rsx!( script { "type": "module", "{contents}" } )
}

fn Link(href: &'static str, content: &'static str, classes: &'static str) -> Element {
    rsx!( a { class: "{link_classes()}", href: href, "{content}" } )
}

fn NavLogo() -> Element {
    rsx!(
        a {
            class: "
                logo
                block rounded-full
                w-6 lg:w-8 h-6 lg:h-8
                bg-neutral-50 dark:bg-neutral-300
                cursor-pointer
            ",
            href: ""
        }
    )
}

fn NavLinks(classes: &'static str) -> Element {
    rsx!(
        div {
            //
            class: "
                links
                flex flex-row gap-4
                font-light lg:font-normal
                text-neutral-100 dark:text-neutral-300
                {classes}
            ",
            Link("", "about", "tracking-wide"),
            Link("", "data + code", "tracking-wide")
        }
    )
}

fn bg_background() -> &'static str {
    "bg-neutral-50 dark:bg-neutral-900"
}

fn link_classes() -> &'static str {
    "underline decoration-1 underline-offset-4 cursor-pointer {classes}"
}
