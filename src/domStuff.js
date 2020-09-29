import * as create from "./create";

function createSlider(id, sliderName, imageArray) {
  const content = document.getElementById(id);
  const pictureFrameWrapper = content.appendChild(
    create.element("div", "class", "pictureFrameWrapper", "", "id", sliderName)
  );
  const leftArrow = pictureFrameWrapper.appendChild(
    create.element(
      "div",
      "class",
      "arrow left-arrow",
      "",
      "id",
      `${sliderName}-left-arrow`
    )
  );
  leftArrow.appendChild(create.element("div", "class", "arrow-line-1"));
  leftArrow.appendChild(create.element("div", "class", "arrow-line-2"));
  const pictureFrame = pictureFrameWrapper.appendChild(
    create.element("div", "class", "pictureFrame")
  );
  const wrappingDiv = pictureFrame.appendChild(
    create.element(
      "div",
      "class",
      "wrapping-div",
      "",
      "id",
      `${sliderName}-wrapping-div`
    )
  );
  const rightArrow = pictureFrameWrapper.appendChild(
    create.element(
      "div",
      "class",
      "arrow right-arrow",
      "",
      "id",
      `${sliderName}-right-arrow`
    )
  );
  rightArrow.appendChild(create.element("div", "class", "arrow-line-1"));
  rightArrow.appendChild(create.element("div", "class", "arrow-line-2"));
  const pictureNavigationWrapper = pictureFrameWrapper.appendChild(
    create.element(
      "div",
      "class",
      "picture-navigation-wrapper",
      "",
      "id",
      `${sliderName}-picture-navigation-wrapper`
    )
  );
  let proto = {
    wrappingDiv,
    pictureNavigationWrapper,
    imageArray,
  };
  addContent(proto);
}

function createImages(wrappingDiv, imageArray) {
  console.log(wrappingDiv);
  console.log(imageArray);
}

function createPictureNavigationCircles(pictureNavigationWrapper) {
  console.log(pictureNavigationWrapper);
}

function addContent(someData) {
  const wrappingDiv = someData.wrappingDiv;
  const pictureNavigationWrapper = someData.pictureNavigationWrapper;
  const imageArray = someData.imageArray;
  createImages(wrappingDiv, imageArray);
  createPictureNavigationCircles(pictureNavigationWrapper);
}

export { createSlider };
