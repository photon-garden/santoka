use super::*;

#[inline_props]
pub fn NonPreviewPoems(cx: Scope, publication_id: PublicationId) -> Element {
    let publication = database.publication(*publication_id);
    render!(for poem in publication.non_preview_poems() {
        Poem { poem: poem }
    })
}
