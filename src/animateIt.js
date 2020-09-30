import * as domStuff from "./domStuff";

function setPosition(newPosition) {
  this.myPosition = newPosition;
}

function correctPositioning() {
  if (this.myPosition < 0) {
    this.myPosition = this.imageArray.length - 1;
  } else if (this.myPosition > this.imageArray.length - 1) {
    this.myPosition = 0;
  }
}

function animateToNextPicture() {
  let newPosition = this.movementArray[this.myPosition];
  this.wrappingDiv.style.transition = "left 1s ease";
  this.wrappingDiv.style.left = newPosition;
  let currentNavCircle = document.getElementById(
    `${this.sliderName}-circle-${this.myPosition}`
  );
  this.navigationCircles.forEach((navigationCircle) => {
    let circle = document.getElementById(navigationCircle.id);
    circle.style.backgroundColor = "transparent";
  });
  currentNavCircle.style.backgroundColor = "#17252A";
}

function runAnimation() {
  this.correctPositioning();
  this.animateToNextPicture();
}

function moveLeft() {
  this.myPosition -= 1;
  this.runAnimation();
}
function moveRight() {
  this.myPosition += 1;
  this.runAnimation();
}

function cycleContinuously() {
  setInterval(this.moveRight.bind(this), 5000);
}

function navigateToSelectedSlide() {
  let myId = this.navigationCircle.id;
  let realId = myId.split("-circle-")[1];
  this.currentObject.myPosition = +realId;
  this.currentObject.animateToNextPicture();
}

function createEventListeners() {
  const leftArrow = document.getElementById(`${this.sliderName}-left-arrow`);
  const rightArrow = document.getElementById(`${this.sliderName}-right-arrow`);
  leftArrow.addEventListener("click", this.moveLeft.bind(this), true);
  rightArrow.addEventListener("click", this.moveRight.bind(this), true);
  /* event listener.. navigate to the selected slide on click */
  this.imageArray.forEach((userImage, currentIndex) => {
    let navigationCircle = document.getElementById(
      `${this.sliderName}-circle-${currentIndex}`
    );
    let currentObject = this;
    navigationCircle.addEventListener(
      "click",
      this.navigateToSelectedSlide.bind({ navigationCircle, currentObject }),
      true
    );
  });
}

function init() {
  this.createEventListeners();
  this.cycleContinuously();
}

/* Let's just throw it into a big object */

function animateObject(someData) {
  const pictureArray = someData.imageArray;
  let myPosition = 0;
  const movementArray = getImagePositionsFromPictureArray(pictureArray);
  let inProto = {
    setPosition,
    correctPositioning,
    animateToNextPicture,
    runAnimation,
    moveLeft,
    moveRight,
    navigateToSelectedSlide,
    createEventListeners,
    cycleContinuously,
    init,
  };
  let myProperties = {
    myPosition,
    movementArray,
  };
  return Object.assign(Object.create(inProto), myProperties, { ...someData });
}

function getImagePositionsFromPictureArray(pictureArray) {
  let moveableUnitsArray = pictureArray.map((picture, currentIndex) => {
    if (currentIndex == 0) {
      return "0px";
    }
    let amountOfPixels = -200 * currentIndex;
    let pixels = amountOfPixels.toString() + "px";
    return pixels;
  });
  return moveableUnitsArray;
}

export { animateObject };
