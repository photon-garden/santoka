pub fn component_name_to_selector(component_name: &str) -> String {
    format!(".{}", component_name).replace(':', "\\:")
}
