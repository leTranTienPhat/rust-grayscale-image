use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    // log(&"Grayscale called".into());

    let base64_to_vector: Vec<u8> = decode(encoded_file).unwrap();
    // log(&"Image decoded".into());

    let mut img: image::DynamicImage = load_from_memory(&base64_to_vector).unwrap();
    // log(&"Image loaded".into());

    img = img.grayscale();
    // log(&"Grayscale applied".into());

    let mut buffer: Vec<_> = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    // log(&"New ImageWritten".into());

    let encoded_img: String = encode(&buffer);
    let data_url: String = format!("data:image/png;base64,{}", encoded_img);

    return data_url;
}
