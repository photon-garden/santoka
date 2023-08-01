use super::ImageAsset;
use image as image_rs;

pub fn optimize_images(image_assets: &[&ImageAsset]) {
    for image_asset in image_assets {
        optimize_image(image_asset);
    }
}

fn optimize_image(image_asset: &ImageAsset) {
    // Use the open function to load an image from a Path.
    // `open` returns a `DynamicImage` on success.
    let image = image_rs::load_from_memory(image_asset.bytes).unwrap();

    image.save("test.webp").unwrap();
}
