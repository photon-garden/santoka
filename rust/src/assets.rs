pub struct Assets {
    pub main_css: CssAsset,
    pub hasui_light_jpeg: ImageAsset,
    pub hasui_dark_jpeg: ImageAsset,
}

pub static assets: Assets = Assets {
    main_css: CssAsset {
        url: "main.css",
        path: "target/tailwind/built.css",
    },
    hasui_light_jpeg: ImageAsset {
        url: "hasui-light.jpeg",
        path: "routes/hasui_light_jpeg/hasui_light.jpeg",
        bytes: include_bytes!("routes/hasui_light_jpeg/hasui_light.jpeg"),
        lqip: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/4QDORXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAAVAAAAZodpAAQAAAABAAAAfAAAAAAAAAEsAAAAAQAAASwAAAABUGl4ZWxtYXRvciBQcm8gMy4zLjkAAAAEkAQAAgAAABQAAACyoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAkoAMABAAAAAEAAAAXAAAAADIwMjM6MDc6MjIgMTg6NTA6MTEA/+EJyWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iUGl4ZWxtYXRvciBQcm8gMy4zLjkiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA3LTIyVDE4OjUwOjExLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA3LTIyVDE4OjUwOjQxLTA0OjAwIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
    },
    hasui_dark_jpeg: ImageAsset {
        url: "hasui-dark.jpeg",
        path: "routes/hasui_dark_jpeg/hasui_light.jpeg",
        bytes: include_bytes!("routes/hasui_dark_jpeg/hasui_dark.jpeg"),
        lqip: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/4QDORXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAAVAAAAZodpAAQAAAABAAAAfAAAAAAAAAEsAAAAAQAAASwAAAABUGl4ZWxtYXRvciBQcm8gMy4zLjkAAAAEkAQAAgAAABQAAACyoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAkoAMABAAAAAEAAAAXAAAAADIwMjM6MDc6MjIgMTg6NTA6MTEA/+EJyWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iUGl4ZWxtYXRvciBQcm8gMy4zLjkiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA3LTIyVDE4OjUwOjExLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA3LTIyVDE4OjUwOjQxLTA0OjAwIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
    },
};

pub struct CssAsset {
    pub url: &'static str,
    pub path: &'static str,
}

impl CssAsset {
    pub fn url_with_leading_slash(&self) -> String {
        format!("/{}", self.url)
    }
}

pub struct ImageAsset {
    pub url: &'static str,
    pub path: &'static str,
    pub bytes: &'static [u8],
    pub lqip: &'static str,
}

impl ImageAsset {
    pub fn url_with_leading_slash(&self) -> String {
        format!("/{}", self.url)
    }
}
