const imageArray = ["controller-1", "controller-2", "controller-3"];
let currentItem = 0;
let previousItem = 2;

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
  const imageFromArray = imageArray[currentItem];
  const useThisImage = `${imageFromArray}.jpg`;
  console.log(useThisImage);
}

function shiftItems() {
  previousItem = currentItem;
  changeArray.call(this);
  moveImages.call(this);
  console.log(currentItem);
}

function moveToTheLeft() {
  /* if we are at the last array item */
  if (currentItem === imageArray.length - 1) {
    currentItem = 0;
    return;
  }
  currentItem += 1;
}

function moveToTheRight() {
  /* if we are at the start of the array, shift
     to the end of the array */
  if (currentItem === 0) {
    currentItem = imageArray.length - 1;
    return;
  }
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
