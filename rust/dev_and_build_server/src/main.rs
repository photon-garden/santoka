#![allow(non_snake_case, non_upper_case_globals)]

use std::{env, fs};

pub mod assets;
pub mod database;
pub mod extensions;
pub mod manifest;
pub mod prelude;
pub mod routes;

use color_eyre::eyre::Result;
use once_cell::sync::Lazy;
use prelude::*;

pub static mode: Lazy<Mode> = Lazy::new(get_mode);

fn main() -> Result<()> {
    color_eyre::install()?;

    let built_dir = manifest::dir().join("built");

    // println!("Removing built folder");
    // if let Err(error) = fs::remove_dir_all(&built_dir) {
    //     println!("Error removing ./built folder: {}", error);
    // }

    println!("Creating built folder.");
    if let Err(error) = fs::create_dir(&built_dir) {
        println!("Error creating built folder: {}", error);
    }

    println!("Saving assets to disk.");
    Assets::new().save_to_disk(&built_dir);

    Ok(())
}

fn get_mode() -> Mode {
    let args: Vec<String> = env::args().collect();

    let arg = args[1].as_str();

    match arg {
        "production" => Mode::Production,
        "dev" => Mode::Dev,
        _ => panic!("Pass either 'dev' or 'production' as an arg."),
    }
}

pub enum Mode {
    Dev,
    Production,
}
