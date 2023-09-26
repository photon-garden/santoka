use crate::prelude::*;
use dioxus::prelude::*;
use dioxus_router::prelude::*;
use shared::append_html::AppendHtml;
use shared::append_html::AppendHtmlContainer;
use shared::show_hide::ShowHide;

mod components;
use self::components::*;

mod contact;
use self::contact::*;

mod css_class_groups;
use self::css_class_groups::*;

mod layout;
use self::layout::*;

mod non_preview_poems;
use self::non_preview_poems::*;

mod not_found;
use self::not_found::*;

mod prelude;

// ANCHOR: router
#[rustfmt::skip]
#[derive(Routable, Clone, PartialEq, Debug)]
pub enum Route {
    #[layout(Layout)]
        #[route("/")]
        Home,
        #[route("/contact")]
        Contact {},  
    #[end_layout]

    #[route("/publications/:publication_id/non-preview-poems")]
    NonPreviewPoems { publication_id: PublicationId },

    #[route("/:..segments")]
    NotFound { segments: Vec<String> },
}
// ANCHOR_END: router

#[inline_props]
fn Home(cx: Scope) -> Element {
    dbg!("Body");
    render! {
        main { class: "relative p-4 lg:p-8 flex flex-col gap-8 lg:gap-32 w-full max-w-screen-2xl",
            HeroSection {}
            PoetrySection {}
        }
    }
}

fn HeroSection(cx: Scope) -> Element {
    dbg!("HeroSection");
    render!(
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
                NavLinks { class: "" }
            }

            HeroImage {}

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

fn PoetrySection(cx: Scope) -> Element {
    dbg!("PoetrySection");
    render!(
        section { id: "poems", class: "flex flex-col",
            for publication in database.publications.iter() {
                PoemsAndPublication { publication: publication }
            }
        }
    )
}

#[inline_props]
fn PoemsAndPublication(cx: Scope, publication: &'static Publication) -> Element {
    dbg!("PoemsAndPublication");
    let show_hide = ShowHide::new();

    render!(
        div { class: "poems-and-publication flex flex-col lg:flex-row gap-10 lg:gap-12 {show_hide.container()}",
            Publication { publication: publication, show_hide: show_hide.clone() }
            PoemsInPublication { publication: publication, show_hide: show_hide.clone() }
        }
    )
}

#[inline_props]
fn Publication(cx: Scope, publication: &'static Publication, show_hide: ShowHide) -> Element {
    dbg!("Publication");
    let translator = database.translator(publication.translator_id);

    // a { class: "underline decoration-1 underline-offset-4 cursor-pointer",
    //     "hide"
    // }
    render!(
        // self-start is necessary to make sticky work.
        div { class: "
                publication
                sticky top-[4.5rem] lg:top-32 self-start
                py-4 lg:pt-0 lg:pb-32
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
                AppLink { class: show_hide.trigger(),
                    span { class: "{show_hide.show_by_default()}", "hide" }
                    span { class: "{show_hide.hide_by_default()}", "show" }
                }
            }
        }
    )
}

#[inline_props]
fn PoemsInPublication(
    cx: Scope,
    publication: &'static Publication,
    show_hide: ShowHide,
) -> Element {
    dbg!("PoemsInPublication");

    // We use padding-bottom instead of gap on the parent because of the way it affects the publication's
    // sticky positioning.
    render!(
        div { class: "
                poems-in-publication
                lg:w-2/3
                pb-16 lg:pb-32
            ",

            VisiblePoemsInPublication { publication: publication, show_hide: show_hide }
            HiddenPoemsInPublication { show_hide: show_hide }
        }
    )
}

#[inline_props]
fn VisiblePoemsInPublication<'show_hide>(
    cx: Scope,
    publication: &'static Publication,
    show_hide: &'show_hide ShowHide,
) -> Element {
    let append_html = AppendHtml::new(
        Route::NonPreviewPoems {
            publication_id: publication.id,
        }
        .to_string(),
    );

    let show_by_default_class = show_hide.show_by_default();

    render!(
        AppendHtmlContainer {
            append_html: append_html,
            class: "
                visible-poems-in-publication
                flex flex-col gap-8 lg:gap-24
                text-base lg:text-3xl 
                {show_by_default_class}
            ",

            for poem in publication.preview_poems() {
                Poem { poem: poem }
            }

            LoadMorePoems { publication: publication }
        }
    )
}

#[inline_props]
fn LoadMorePoems(cx: Scope, publication: &'static Publication) -> Element {
    dbg!(publication);

    render!(
        // bg-neutral-200 dark:bg-neutral-600
        span { class: "
                    text-neutral-400 dark:text-neutral-400
                    flex flex-row gap-2
                ",

            "⨀"

            button {
                disabled: "true",
                class: "
                        tracking-wide
                        whitespace-nowrap
                        font-thin
                        w-min
                        {link_classes()}
                    ",
                "load more"
            }
        }
    )
}

#[inline_props]
fn HiddenPoemsInPublication<'show_hide>(cx: Scope, show_hide: &'show_hide ShowHide) -> Element {
    render!(
        div {
            //
            class: "
                hidden-poems
                font-light lg:font-extralight
                text-sm lg:text-2xl 
                text-neutral-400 dark:text-neutral-500
                p-8
                border border-neutral-200 dark:border-neutral-700
                rounded-2xl
                cursor-pointer
                {show_hide.hide_by_default()}
                {show_hide.trigger()}
            ",
            "Click to show."
        }
    )
}

#[inline_props]
pub fn Poem(cx: Scope, poem: &'static Poem) -> Element {
    dbg!("Poem");
    let english_text = poem.english_text.replace("—\n", "—");
    let japanese_text = poem.japanese_text_or_default(); //.replace('\n', "<br>");

    render!(
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

fn HeroImage(cx: Scope) -> Element {
    let class = format!(
        "
            shrink-0 min-w-full min-h-full object-cover
            transform -scale-x-100 lg:scale-x-100 object-right lg:object-left
            {}
        ",
        parallax::parallax()
    );

    render!(
        //
        LightDarkImage {
            asset: &non_html_assets.images.hasui_hero,
            class: class,
            above_the_fold: true,
            is_largest_contentful_paint: true
        }
    )
}
