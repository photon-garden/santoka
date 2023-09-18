use crate::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{Document, Element, HtmlElement, NodeList};

pub trait DocumentExtension {
    fn find_child_elements_with_name(&self, component_name: &str) -> Vec<HtmlElement>;
    fn query_name_selector(&self, component_name: &str) -> Option<Element>;
    fn query_name_selector_all(&self, name: &str) -> NodeList;
}

impl DocumentExtension for Document {
    fn find_child_elements_with_name(&self, component_name: &str) -> Vec<HtmlElement> {
        self.query_name_selector_all(component_name)
            .into_iter()
            .map(|node| node.dyn_into::<HtmlElement>().unwrap())
            .collect()
    }

    fn query_name_selector(&self, component_name: &str) -> Option<Element> {
        let selector = component_name_to_selector(component_name);
        self.query_selector(&selector)
            .expect("document.query_selector() failed.")
    }

    fn query_name_selector_all(&self, component_name: &str) -> NodeList {
        let selector = component_name_to_selector(component_name);
        self.query_selector_all(&selector)
            .expect("document.query_selector_all() failed.")
    }
}
