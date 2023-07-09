use ts_rs::TS;

static json: &str = include_str!("../../data/2023-06-26T14:52:00.000Z/database.json");

pub fn load() -> Database {
    serde_json::from_str(json).unwrap()
}

#[derive(Debug, serde::Deserialize, TS)]
#[ts(
    export,
    export_to = "../data/2023-06-26T14:52:00.000Z/typescript-types/Database.ts"
)]
#[serde(rename_all = "camelCase")]
pub struct Database {
    pub created_at: String, // An ISO 8601 timestamp.
    pub poems: Vec<Poem>,
    pub translators: Vec<Translator>,
    pub publications: Vec<Publication>,
}

impl Database {
    // As long as our tests pass, get_translator and get_publication can't panic
    // even though they contain unwrap. That's because:
    // - Code outside this module can't construct publication ids, so all publication
    //   ids come from poems in the database.
    // - Our tests confirm that all poems have valid publication ids.
    // - We include the serialized database at compile time and it's immutable.

    pub fn get_translator(&self, id: TranslatorId) -> &Translator {
        self.translators
            .iter()
            .find(|translator| translator.id == id)
            .unwrap()
    }

    pub fn get_publication(&self, id: PublicationId) -> &Publication {
        self.publications
            .iter()
            .find(|publication| publication.id == id)
            .unwrap()
    }
}

#[derive(Debug, serde::Deserialize, TS)]
#[ts(
    export,
    export_to = "../data/2023-06-26T14:52:00.000Z/typescript-types/Poem.ts"
)]
#[serde(rename_all = "camelCase")]
pub struct Poem {
    pub id: PoemId,
    pub translator_id: TranslatorId,
    pub publication_id: PublicationId,
    pub english_text: String,
    pub japanese_text: Option<String>,
}

#[derive(Debug, serde::Deserialize, PartialEq, Clone, Copy, TS)]
#[ts(
    export,
    export_to = "../data/2023-06-26T14:52:00.000Z/typescript-types/PoemId.ts"
)]
pub struct PoemId(usize);

impl Poem {
    pub fn japanese_text_or_default(&self) -> &str {
        self.japanese_text
            .as_ref()
            .map_or("", |japanese_text: &String| &japanese_text[..])
    }
}

#[derive(Debug, serde::Deserialize, TS)]
#[ts(
    export,
    export_to = "../data/2023-06-26T14:52:00.000Z/typescript-types/Publication.ts"
)]
#[serde(rename_all = "camelCase")]
pub struct Publication {
    pub id: PublicationId,
    pub description: String,
}

#[derive(Debug, serde::Deserialize, PartialEq, Clone, Copy, TS)]
#[ts(
    export,
    export_to = "../data/2023-06-26T14:52:00.000Z/typescript-types/PublicationId.ts"
)]
pub struct PublicationId(usize);

#[derive(Debug, serde::Deserialize, TS)]
#[ts(
    export,
    export_to = "../data/2023-06-26T14:52:00.000Z/typescript-types/Translator.ts"
)]
#[serde(rename_all = "camelCase")]
pub struct Translator {
    pub id: TranslatorId,
    pub name: String,
}

#[derive(Debug, serde::Deserialize, PartialEq, Clone, Copy, TS)]
#[ts(
    export,
    export_to = "../data/2023-06-26T14:52:00.000Z/typescript-types/TranslatorId.ts"
)]
pub struct TranslatorId(usize);

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn load_database() {
        load();
    }

    #[test]
    fn test_primary_key_constraints() {
        let db = load();
        for poem in &db.poems {
            let publication_id = poem.publication_id;
            let translator_id = poem.translator_id;

            // These functions panic if the record isn't found, failing the test.
            db.get_publication(publication_id);
            db.get_translator(translator_id);
        }
    }
}
