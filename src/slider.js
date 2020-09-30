import * as domStuff from "./domStuff";
import * as animateIt from "./animateIt";

function init(id, sliderName, imageArray) {
  const someData = domStuff.createSlider(id, sliderName, imageArray);
  const animateObject = animateIt.animateObject(someData);
  animateObject.init();
}

export { init };
