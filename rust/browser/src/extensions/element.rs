use web_sys::{Element, NodeList};

use super::string::component_name_to_selector;

pub trait ElementExtension {
    fn show(&self);
    fn hide(&self);
    fn query_name_selector_all(&self, name: &str) -> NodeList;
}

impl ElementExtension for Element {
    fn show(&self) {
        self.class_list().remove_1("hidden").unwrap();
    }

    fn hide(&self) {
        self.class_list().add_1("hidden").unwrap();
    }

    fn query_name_selector_all(&self, component_name: &str) -> NodeList {
        // let selector = format!("[data-browser-component-name=\"{}\"]", component_name);
        let selector = component_name_to_selector(component_name);
        self.query_selector_all(&selector)
            .expect("document.query_selector_all() failed.")
    }
}
