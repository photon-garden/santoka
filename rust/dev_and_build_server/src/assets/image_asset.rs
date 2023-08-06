use std::path::Path;

use crate::prelude::*;
use image::{DynamicImage, GenericImageView};
use rayon::prelude::*;

#[derive(PartialEq)]
pub struct ImageAsset {
    pub asset_path: String,
    pub alt: &'static str,
    pub bytes: &'static [u8],
    pub lqip: &'static str,

    pub width: u32,
    pub height: u32,

    srcset: String,
    image: DynamicImage,
}

impl ImageAsset {
    pub fn new(
        asset_path: &'static str,
        alt: &'static str,
        bytes: &'static [u8],
        lqip: &'static str,
    ) -> ImageAsset {
        let asset_path = "images/".to_string() + asset_path;
        let image = image::load_from_memory(bytes).unwrap();
        let (width, height) = image.dimensions();
        let srcset = Self::create_srcset(&asset_path, width);

        ImageAsset {
            asset_path,
            alt,
            bytes,
            lqip,
            width,
            height,
            srcset,
            image,
        }
    }

    pub fn src(&self) -> &str {
        &self.asset_path
    }

    pub fn resized_variants(&self) -> Vec<ResizedImageAsset> {
        let original_width = self.image.width();

        Self::available_widths(original_width)
            .into_par_iter()
            .map(|target_width| ResizedImageAsset {
                asset_path: Self::asset_path_with_width(&self.asset_path, target_width),
                width: target_width,
                image: &self.image,
            })
            .collect()
    }

    pub fn srcset(&self) -> &str {
        &self.srcset
    }

    fn create_srcset(asset_path: &str, image_width: u32) -> String {
        Self::available_widths(image_width)
            .into_iter()
            .map(|width| {
                let asset_path_with_width = Self::asset_path_with_width(asset_path, width);
                format!("{asset_path_with_width} {width}w")
            })
            .collect::<Vec<String>>()
            .join(", ")
    }

    fn available_widths(image_width: u32) -> Vec<u32> {
        Self::possible_widths()
            .into_iter()
            .filter(|possible_width| possible_width <= &image_width)
            .collect()
    }

    fn possible_widths() -> Vec<u32> {
        vec![1000, 2000, 3000]
        // (32..=3584).step_by(1000).collect()
    }

    fn asset_path_with_width(asset_path: &str, width: u32) -> String {
        map_filename_without_extension(asset_path, |filename_without_extension| {
            format!("{filename_without_extension}-{width}w")
        })
    }
}

pub struct ResizedImageAsset<'image> {
    asset_path: String,
    width: u32,
    image: &'image DynamicImage,
}

impl<'image> ResizedImageAsset<'image> {
    pub fn save_to_disk(&self, built_dir: &Path, _mode: &Mode) {
        if self.needs_to_be_recreated(built_dir) {
            let path = Assets::path_on_disk(built_dir, &self.asset_path);

            let parent_dir = path.parent().unwrap();
            if !parent_dir.exists() {
                fs::create_dir_all(parent_dir).unwrap();
            }

            dbg!("Saving resized image to disk: {:?}", &self.asset_path);
            self.image
                .resize_to_width(self.width)
                .save_with_format(path, image::ImageFormat::Jpeg)
                .unwrap();

            return;
        }

        dbg!(
            "Resized image {} already exists, so skipping saving it to disk.",
            &self.asset_path
        );
    }

    pub fn needs_to_be_recreated(&self, built_dir: &Path) -> bool {
        let path = Assets::path_on_disk(built_dir, &self.asset_path);
        if !Path::exists(&path) {
            return true;
        }

        let image_on_disk = image::open(&path).unwrap();
        if image_on_disk.width() == self.width {
            return false;
        }

        true
    }
}
