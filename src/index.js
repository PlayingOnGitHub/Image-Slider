const pictureArray = ["controller-1", "controller-2", "controller-3"];
// const movementArray = pictureArray.map( (picture, currentIndex) => {
//   if ( currentIndex == 0) {
//     return "0px";
//   }
//   let amountOfPixels = -200 * currentIndex;
//   let pixels = amountOfPixels.toString() + "px";
//   return pixels;
// });

const wrappingDiv = document.getElementById("wrapping-div");
let currentItem = 0;

// function moveLeft() {
//     const direction = this;
//     direction.style.transition = "left 1.5s ease";
//     direction.style.left = pictureArray[currentItem];
//     currentItem += 1;
// }
// temp1.addEventListener("transitionend", cycleThroughImages, true);
// temp1.style.transition = "left 1.2s ease";
// temp1.style.left = "1px";

function createEventListeners() {
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  leftArrow.addEventListener("click", moveLeft, true);
  rightArrow.addEventListener("click", moveRight, true);
}

createEventListeners();
