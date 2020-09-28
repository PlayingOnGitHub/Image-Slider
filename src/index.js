const imageArray = ["controller-1", "controller-2", "controller-3"];

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
