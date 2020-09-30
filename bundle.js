/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animateIt.js":
/*!**************************!*\
  !*** ./src/animateIt.js ***!
  \**************************/
/*! exports provided: animateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animateObject\", function() { return animateObject; });\n/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ \"./src/domStuff.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction setPosition(newPosition) {\n  this.myPosition = newPosition;\n}\n\nfunction correctPositioning() {\n  if (this.myPosition < 0) {\n    this.myPosition = this.imageArray.length - 1;\n  } else if (this.myPosition > this.imageArray.length - 1) {\n    this.myPosition = 0;\n  }\n}\n\nfunction animateToNextPicture() {\n  var newPosition = this.movementArray[this.myPosition];\n  this.wrappingDiv.style.transition = \"left 1s ease\";\n  this.wrappingDiv.style.left = newPosition;\n  var currentNavCircle = document.getElementById(\"\".concat(this.sliderName, \"-circle-\").concat(this.myPosition));\n  this.navigationCircles.forEach(function (navigationCircle) {\n    var circle = document.getElementById(navigationCircle.id);\n    circle.style.backgroundColor = \"transparent\";\n  });\n  currentNavCircle.style.backgroundColor = \"#17252A\";\n}\n\nfunction runAnimation() {\n  this.correctPositioning();\n  this.animateToNextPicture();\n}\n\nfunction moveLeft() {\n  this.myPosition -= 1;\n  this.runAnimation();\n}\n\nfunction moveRight() {\n  this.myPosition += 1;\n  this.runAnimation();\n}\n\nfunction cycleContinuously() {\n  setInterval(this.moveRight.bind(this), 5000);\n}\n\nfunction navigateToSelectedSlide() {\n  var myId = this.navigationCircle.id;\n  var realId = myId.split(\"-circle-\")[1];\n  this.currentObject.myPosition = +realId;\n  this.currentObject.animateToNextPicture();\n}\n\nfunction createEventListeners() {\n  var _this = this;\n\n  var leftArrow = document.getElementById(\"\".concat(this.sliderName, \"-left-arrow\"));\n  var rightArrow = document.getElementById(\"\".concat(this.sliderName, \"-right-arrow\"));\n  leftArrow.addEventListener(\"click\", this.moveLeft.bind(this), true);\n  rightArrow.addEventListener(\"click\", this.moveRight.bind(this), true);\n  /* event listener.. navigate to the selected slide on click */\n\n  this.imageArray.forEach(function (userImage, currentIndex) {\n    var navigationCircle = document.getElementById(\"\".concat(_this.sliderName, \"-circle-\").concat(currentIndex));\n    var currentObject = _this;\n    navigationCircle.addEventListener(\"click\", _this.navigateToSelectedSlide.bind({\n      navigationCircle: navigationCircle,\n      currentObject: currentObject\n    }), true);\n  });\n}\n\nfunction init() {\n  this.createEventListeners();\n  this.cycleContinuously();\n}\n/* Let's just throw it into a big object */\n\n\nfunction animateObject(someData) {\n  var pictureArray = someData.imageArray;\n  var myPosition = 0;\n  var movementArray = getImagePositionsFromPictureArray(pictureArray);\n  var inProto = {\n    setPosition: setPosition,\n    correctPositioning: correctPositioning,\n    animateToNextPicture: animateToNextPicture,\n    runAnimation: runAnimation,\n    moveLeft: moveLeft,\n    moveRight: moveRight,\n    navigateToSelectedSlide: navigateToSelectedSlide,\n    createEventListeners: createEventListeners,\n    cycleContinuously: cycleContinuously,\n    init: init\n  };\n  var myProperties = {\n    myPosition: myPosition,\n    movementArray: movementArray\n  };\n  return Object.assign(Object.create(inProto), myProperties, _objectSpread({}, someData));\n}\n\nfunction getImagePositionsFromPictureArray(pictureArray) {\n  var moveableUnitsArray = pictureArray.map(function (picture, currentIndex) {\n    if (currentIndex == 0) {\n      return \"0px\";\n    }\n\n    var amountOfPixels = -200 * currentIndex;\n    var pixels = amountOfPixels.toString() + \"px\";\n    return pixels;\n  });\n  return moveableUnitsArray;\n}\n\n\n\n//# sourceURL=webpack:///./src/animateIt.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/*! exports provided: element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\nfunction element(type, idOrClass, name, href, idOrClass2, name2) {\n  var newElement = document.createElement(type);\n  if (idOrClass === undefined && idOrClass !== \"\") return newElement;\n\n  if (idOrClass === \"id\" || idOrClass === \"class\") {\n    idOrClass === \"id\" ? newElement.id = name : newElement.className = name;\n  }\n\n  if (href !== false) {\n    if (type === \"img\") {\n      newElement.src = href;\n    }\n\n    if (type === \"a\") {\n      newElement.href = href;\n    }\n  }\n\n  if (idOrClass2 === undefined && idOrClass2 !== \"\") return newElement;\n\n  if (idOrClass2 === \"id\" || idOrClass2 === \"class\") {\n    idOrClass2 === \"id\" ? newElement.id = name2 : newElement.className = name2;\n  }\n\n  return newElement;\n}\n\n\n\n//# sourceURL=webpack:///./src/create.js?");

/***/ }),

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/*! exports provided: createSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSlider\", function() { return createSlider; });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\nfunction createSlider(id, sliderName, imageArray) {\n  var content = document.getElementById(id);\n  var pictureFrameWrapper = content.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"pictureFrameWrapper\", \"\", \"id\", sliderName));\n  var leftArrow = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow left-arrow\", \"\", \"id\", \"\".concat(sliderName, \"-left-arrow\")));\n  leftArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-1\"));\n  leftArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-2\"));\n  var pictureFrame = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"pictureFrame\"));\n  var wrappingDiv = pictureFrame.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"wrapping-div\", \"\", \"id\", \"\".concat(sliderName, \"-wrapping-div\")));\n  var rightArrow = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow right-arrow\", \"\", \"id\", \"\".concat(sliderName, \"-right-arrow\")));\n  rightArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-1\"));\n  rightArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-2\"));\n  var pictureNavigationWrapper = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"picture-navigation-wrapper\", \"\", \"id\", \"\".concat(sliderName, \"-picture-navigation-wrapper\")));\n  var myImages = imageArray.forEach(function (userImage, currentIndex) {\n    var newImage = wrappingDiv.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"img\", \"class\", \"picture\", \"\", \"id\", \"\".concat(sliderName, \"-\").concat(currentIndex)));\n    newImage.src = imageArray[currentIndex];\n  });\n  var currentIndex = 0;\n  var navigationCircles = imageArray.map(function () {\n    var navCircle = pictureNavigationWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"circle\", \"\", \"id\", \"\".concat(sliderName, \"-circle-\").concat(currentIndex)));\n\n    if (currentIndex == 0) {\n      navCircle.style.backgroundColor = \"#17252A\";\n    }\n\n    currentIndex += 1;\n    return navCircle;\n  });\n  var proto = {\n    wrappingDiv: wrappingDiv,\n    pictureNavigationWrapper: pictureNavigationWrapper,\n    imageArray: imageArray,\n    sliderName: sliderName,\n    myImages: myImages,\n    navigationCircles: navigationCircles\n  };\n  return proto;\n}\n\n\n\n//# sourceURL=webpack:///./src/domStuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\nvar imageArray = [\"controller-1.jpg\", \"controller-2.jpg\", \"controller-3.jpg\"];\n_slider__WEBPACK_IMPORTED_MODULE_0__[\"init\"](\"content\", \"cool-slider\", imageArray);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ \"./src/domStuff.js\");\n/* harmony import */ var _animateIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animateIt */ \"./src/animateIt.js\");\n\n\n\nfunction init(id, sliderName, imageArray) {\n  var someData = _domStuff__WEBPACK_IMPORTED_MODULE_0__[\"createSlider\"](id, sliderName, imageArray);\n  var animateObject = _animateIt__WEBPACK_IMPORTED_MODULE_1__[\"animateObject\"](someData);\n  animateObject.init();\n}\n\n\n\n//# sourceURL=webpack:///./src/slider.js?");

/***/ })

/******/ });