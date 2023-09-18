use crate::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{Element, HtmlElement, NodeList};

pub trait ElementExtension {
    fn show(&self);
    fn hide(&self);
    fn find_child_elements_with_name(&self, component_name: &str) -> Vec<HtmlElement>;
    fn query_name_selector(&self, component_name: &str) -> Option<Element>;
    fn query_name_selector_all(&self, component_name: &str) -> NodeList;
}

impl ElementExtension for Element {
    fn show(&self) {
        self.class_list().remove_1("hidden").unwrap();
    }

    fn hide(&self) {
        self.class_list().add_1("hidden").unwrap();
    }

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
            .expect("element.query_selector_all() failed.")
    }
}
