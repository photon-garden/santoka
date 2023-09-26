pub fn option_one() {
    let hide = html!(
        <a>hide</a>
    );

    let poems = html!(
        <div class="poems">
            <!-- Poems -->
        </div>
    );

    let placeholder = html!(
        <div class="placeholder">
            These poems are hidden. Click to show.
        </div>
    );

    let container = html!(
        <div class="publication">
            {hide}
            {poems}
            {placeholder}
        </div>
    );

    ShowHide {
        container,
        triggers: vec![hide, placeholder],
        show_by_default: vec![poems],
        hide_by_default: vec![placeholder],
    }
    .render();
}

pub fn option_two() {
    let show_hide = ShowHide::new();

    html!(
        <div class="publication" {show_hide.container()}>
            <a {show_hide.trigger()}>
                hide
            </a>

            <div class="poems" {show_hide.shown_by_default()}>
                <!-- Poems -->
            </div>

            <div class="placeholder" {show_hide.hidden_by_default()} {show_hide.trigger()}>
                These poems are hidden. Click to show.
            </div>
        </div>
    );
}
