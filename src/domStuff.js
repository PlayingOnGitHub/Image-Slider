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
  const myImages = imageArray.forEach((userImage, currentIndex) => {
    const newImage = wrappingDiv.appendChild(
      create.element(
        "img",
        "class",
        "picture",
        "",
        "id",
        `${sliderName}-${currentIndex}`
      )
    );
    newImage.src = imageArray[currentIndex];
  });
  let currentIndex = 0;
  let navigationCircles = imageArray.map(() => {
    const navCircle = pictureNavigationWrapper.appendChild(
      create.element(
        "div",
        "class",
        "circle",
        "",
        "id",
        `${sliderName}-circle-${currentIndex}`
      )
    );
    if (currentIndex == 0) {
      navCircle.style.backgroundColor = "#17252A";
    }
    currentIndex += 1;
    return navCircle;
  });
  let proto = {
    wrappingDiv,
    pictureNavigationWrapper,
    imageArray,
    sliderName,
    myImages,
    navigationCircles,
  };
  return proto;
}

export { createSlider };
