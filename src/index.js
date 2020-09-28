const imageArray = ["controller-1", "controller-2", "controller-3"];

let currentItem = 0;
let previousItem = 2;
let imageState = "forward";

function changeArray() {
  const arrow = this;
  const direction = arrow.id;
  if (direction === "left-arrow") {
    moveToTheRight();
  } else if (direction === "right-arrow") {
    moveToTheLeft();
  }
}

function moveImages() {
  const nextImageFromArray = imageArray[currentItem];
  const centerImageFromArray = imageArray[previousItem];
  const nextImageFromArraySrc = `${nextImageFromArray}.jpg`;
  const centerImageFromArraySrc = `${centerImageFromArray}.jpg`;
  const centerImageDomElement = document.getElementById(
    "picture" + previousItem
  );
  const nextImageDomElement = document.getElementById("picture" + currentItem);
  const arrow = this;
  if (arrow.id) {
    const direction = arrow.id;
    console.log("Previous:" + previousItem);
    console.log("Current:" + currentItem);
    console.log("before error");
    if (direction == "left-arrow") {
      centerImageDomElement.className = "picture move-to-right-slide";
      nextImageDomElement.className = "picture move-to-center-slide";
    } else if (direction == "right-arrow") {
      /* centerImageDomElement shifts to the left */
      /* nextImageDomElement shifts to the center */
      centerImageDomElement.className = "picture move-to-left-slide";
      nextImageDomElement.className = "picture move-to-center-slide";
    }
  }
}

function stackImagesToRightSlide() {
  console.log("stacking to the right");
  //   imageArray.forEach( (image) => {

  //   })
}
function stackImagesToLeftSlide() {
  console.log("stacking to the left");
}

function restackImages() {
  if (currentItem == 0 && previousItem == 2) {
    /* restack images */
    stackImagesToRightSlide();
  } else if (currentItem == 2 && previousItem == 0) {
    /* restack images */
    stackImagesToLeftSlide();
  }
}

function shiftItems() {
  previousItem = currentItem;
  changeArray.call(this);
  restackImages.call(this);
  moveImages.call(this);
  console.log(currentItem);
}

function moveToTheLeft() {
  /* if we are at the last array item */
  if (currentItem === imageArray.length - 1) {
    currentItem = 0;
    imageState = "jump";
    return;
  }
  imageState = "normal";
  currentItem += 1;
}

function moveToTheRight() {
  /* if we are at the start of the array, shift
     to the end of the array */
  if (currentItem === 0) {
    currentItem = imageArray.length - 1;
    imageState = "reverse";
    return;
  }
  imageState = "normal";
  currentItem -= 1;
}

/* test functions */
function moveLeft() {
  const leftArrow = document.getElementById("left-arrow");
  shiftItems.call(leftArrow);
}

function moveRight() {
  const rightArrow = document.getElementById("right-arrow");
  shiftItems.call(rightArrow);
}

function createEventListeners() {
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  leftArrow.addEventListener("click", shiftItems.bind(leftArrow), true);
  rightArrow.addEventListener("click", shiftItems.bind(rightArrow), true);
}

createEventListeners();
