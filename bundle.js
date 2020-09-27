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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var imageArray = [\"controller-1\", \"controller-2\", \"controller-3\"];\nvar currentItem = 0;\nvar previousItem = 2;\n\nfunction changeArray() {\n  var arrow = this;\n  var direction = arrow.id;\n\n  if (direction === \"left-arrow\") {\n    moveToTheRight();\n  } else if (direction === \"right-arrow\") {\n    moveToTheLeft();\n  }\n}\n\nfunction moveImages() {\n  var imageFromArray = imageArray[currentItem];\n  var useThisImage = \"\".concat(imageFromArray, \".jpg\");\n  console.log(useThisImage);\n}\n\nfunction shiftItems() {\n  previousItem = currentItem;\n  changeArray.call(this);\n  moveImages.call(this);\n  console.log(currentItem);\n}\n\nfunction moveToTheLeft() {\n  /* if we are at the last array item */\n  if (currentItem === imageArray.length - 1) {\n    currentItem = 0;\n    return;\n  }\n\n  currentItem += 1;\n}\n\nfunction moveToTheRight() {\n  /* if we are at the start of the array, shift\n     to the end of the array */\n  if (currentItem === 0) {\n    currentItem = imageArray.length - 1;\n    return;\n  }\n\n  currentItem -= 1;\n}\n/* test functions */\n\n\nfunction moveLeft() {\n  var leftArrow = document.getElementById(\"left-arrow\");\n  shiftItems.call(leftArrow);\n}\n\nfunction moveRight() {\n  var rightArrow = document.getElementById(\"right-arrow\");\n  shiftItems.call(rightArrow);\n}\n\nfunction createEventListeners() {\n  var leftArrow = document.getElementById(\"left-arrow\");\n  var rightArrow = document.getElementById(\"right-arrow\");\n  leftArrow.addEventListener(\"click\", shiftItems.bind(leftArrow), true);\n  rightArrow.addEventListener(\"click\", shiftItems.bind(rightArrow), true);\n}\n\ncreateEventListeners();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });