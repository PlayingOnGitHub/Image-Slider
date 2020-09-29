import * as domStuff from "./domStuff";
const imageArray = ["controller-1", "controller-2", "controller-3"];
domStuff.createSlider("content", "cool-slider", imageArray);

// const pictureArray = ["controller-1", "controller-2", "controller-3"];
// const wrappingDiv = document.getElementById("wrapping-div");
// let myPosition = 0;

// const movementArray = pictureArray.map((picture, currentIndex) => {
//   if (currentIndex == 0) {
//     return "0px";
//   }
//   let amountOfPixels = -200 * currentIndex;
//   let pixels = amountOfPixels.toString() + "px";
//   return pixels;
// });

// function correctPositioning() {
//   if (myPosition < 0) {
//     myPosition = pictureArray.length - 1;
//   } else if (myPosition > pictureArray.length - 1) {
//     myPosition = 0;
//   }
// }

// function runAnimation() {
//   correctPositioning();
//   animateToNextPicture();
// }

// function animateToNextPicture() {
//   let newPosition = movementArray[myPosition];
//   wrappingDiv.style.transition = "left 1s ease";
//   wrappingDiv.style.left = newPosition;
// }

// function moveLeft() {
//   myPosition -= 1;
//   runAnimation();
// }
// function moveRight() {
//   myPosition += 1;
//   runAnimation();
// }

// function cycleContinuously() {
//   setInterval(moveRight, 5000);
// }

// function createEventListeners() {
//   const leftArrow = document.getElementById("left-arrow");
//   const rightArrow = document.getElementById("right-arrow");
//   leftArrow.addEventListener("click", moveLeft, true);
//   rightArrow.addEventListener("click", moveRight, true);
// }

// createEventListeners();
// createNavigationCircles();
// cycleContinuously();
