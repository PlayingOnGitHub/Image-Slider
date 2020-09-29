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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSlider\", function() { return createSlider; });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\nfunction createSlider(id, sliderName, imageArray) {\n  var content = document.getElementById(id);\n  var pictureFrameWrapper = content.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"pictureFrameWrapper\", \"\", \"id\", sliderName));\n  var leftArrow = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow left-arrow\", \"\", \"id\", \"\".concat(sliderName, \"-left-arrow\")));\n  leftArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-1\"));\n  leftArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-2\"));\n  var pictureFrame = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"pictureFrame\"));\n  var wrappingDiv = pictureFrame.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"wrapping-div\", \"\", \"id\", \"\".concat(sliderName, \"-wrapping-div\")));\n  var rightArrow = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow right-arrow\", \"\", \"id\", \"\".concat(sliderName, \"-right-arrow\")));\n  rightArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-1\"));\n  rightArrow.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"arrow-line-2\"));\n  var pictureNavigationWrapper = pictureFrameWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"picture-navigation-wrapper\", \"\", \"id\", \"\".concat(sliderName, \"-picture-navigation-wrapper\")));\n  var proto = {\n    wrappingDiv: wrappingDiv,\n    pictureNavigationWrapper: pictureNavigationWrapper,\n    imageArray: imageArray\n  };\n  addContent(proto);\n}\n\nfunction createImages(wrappingDiv, imageArray) {\n  console.log(wrappingDiv);\n  console.log(imageArray);\n}\n\nfunction createPictureNavigationCircles(pictureNavigationWrapper) {\n  console.log(pictureNavigationWrapper);\n}\n\nfunction addContent(someData) {\n  var wrappingDiv = someData.wrappingDiv;\n  var pictureNavigationWrapper = someData.pictureNavigationWrapper;\n  var imageArray = someData.imageArray;\n  createImages(wrappingDiv, imageArray);\n  createPictureNavigationCircles(pictureNavigationWrapper);\n}\n\n\n\n//# sourceURL=webpack:///./src/domStuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ \"./src/domStuff.js\");\n\nvar imageArray = [\"controller-1\", \"controller-2\", \"controller-3\"];\n_domStuff__WEBPACK_IMPORTED_MODULE_0__[\"createSlider\"](\"content\", \"cool-slider\", imageArray); // const pictureArray = [\"controller-1\", \"controller-2\", \"controller-3\"];\n// const wrappingDiv = document.getElementById(\"wrapping-div\");\n// let myPosition = 0;\n// const movementArray = pictureArray.map((picture, currentIndex) => {\n//   if (currentIndex == 0) {\n//     return \"0px\";\n//   }\n//   let amountOfPixels = -200 * currentIndex;\n//   let pixels = amountOfPixels.toString() + \"px\";\n//   return pixels;\n// });\n// function correctPositioning() {\n//   if (myPosition < 0) {\n//     myPosition = pictureArray.length - 1;\n//   } else if (myPosition > pictureArray.length - 1) {\n//     myPosition = 0;\n//   }\n// }\n// function runAnimation() {\n//   correctPositioning();\n//   animateToNextPicture();\n// }\n// function animateToNextPicture() {\n//   let newPosition = movementArray[myPosition];\n//   wrappingDiv.style.transition = \"left 1s ease\";\n//   wrappingDiv.style.left = newPosition;\n// }\n// function moveLeft() {\n//   myPosition -= 1;\n//   runAnimation();\n// }\n// function moveRight() {\n//   myPosition += 1;\n//   runAnimation();\n// }\n// function cycleContinuously() {\n//   setInterval(moveRight, 5000);\n// }\n// function createEventListeners() {\n//   const leftArrow = document.getElementById(\"left-arrow\");\n//   const rightArrow = document.getElementById(\"right-arrow\");\n//   leftArrow.addEventListener(\"click\", moveLeft, true);\n//   rightArrow.addEventListener(\"click\", moveRight, true);\n// }\n// createEventListeners();\n// createNavigationCircles();\n// cycleContinuously();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });