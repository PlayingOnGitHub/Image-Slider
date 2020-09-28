const imageArray = ["controller-1", "controller-2", "controller-3"];

/* test functions */

function createEventListeners() {
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  leftArrow.addEventListener("click", shiftItems.bind(leftArrow), true);
  rightArrow.addEventListener("click", shiftItems.bind(rightArrow), true);
}

createEventListeners();
