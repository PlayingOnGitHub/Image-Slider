Creates a repeatable image carousel using Webpack, Babel, NPM..

Basic syntax ->
import * as slider from "./slider";
const yourImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
slider.init("appendToThisId", "sliderName", yourImages);