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
/******/ 	__webpack_require__.p = ".";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/javascript/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/app.scss":
/*!*********************************!*\
  !*** ./src/assets/css/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/assets/css/app.scss?");

/***/ }),

/***/ "./src/assets/javascript/entry.js":
/*!****************************************!*\
  !*** ./src/assets/javascript/entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ \"./src/assets/css/app.scss\");\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n(function(){\r\n\r\n    let pages = [\r\n        'index-page',\r\n        'curses-page',\r\n        'workshops-page',\r\n        'communities-page',\r\n        'articles-page',\r\n        'profile-page'\r\n    ];\r\n\r\n    let page = document.querySelector('body').getAttribute('data-page');\r\n    let menu = document.querySelectorAll('nav a');\r\n\r\n    for(let i = 0; i <= pages.length; i++){\r\n        \r\n        console.log(pages[i] + 'Hola');\r\n        if(page === pages[i]) menu[i].classList.add('active');\r\n\r\n    }\r\n\r\n    let countDown = document.querySelector('.count-down');\r\n\r\n    if(page === 'workshops-page'){\r\n        let hour = 11;\r\n        let minutes = 59;\r\n        let seconds = 59;\r\n\r\n        countDown.querySelector('.seconds').innerHTML = seconds;\r\n        countDown.querySelector('.minutes').innerHTML = minutes;\r\n        countDown.querySelector('.hour').innerHTML = hour;\r\n        \r\n\r\n        let textsecond;\r\n        let textminutes;\r\n        let texthour;\r\n\r\n        setInterval(function(){\r\n            (seconds == 1) ? seconds = 59 : seconds--;\r\n\r\n            (seconds < 10) ? textsecond = '0' + seconds : textsecond = seconds;\r\n\r\n            countDown.querySelector('.seconds').innerHTML = textsecond;\r\n\r\n        },1000);\r\n\r\n        setInterval(function(){\r\n            (minutes == 1) ? minutes = 59 : minutes--;\r\n\r\n            (minutes < 10) ? textminutes = '0' + minutes : textminutes = minutes;\r\n\r\n            countDown.querySelector('.minutes').innerHTML = textminutes;\r\n\r\n        },60000);\r\n\r\n        setInterval(function(){\r\n            (hour == 1) ? hour = 24 : hour--;\r\n\r\n            (hour < 10) ? texthour = '0' + hour : texthour = minutes;\r\n\r\n            countDown.querySelector('.hour').innerHTML = texthour;\r\n\r\n        },3600000);\r\n    }\r\n\r\n    let image = [\r\n        './public/slide/slide-1.jpg',\r\n        './public/slide/slide-2.jpg',\r\n        './public/slide/slide-3.jpeg',\r\n        './public/slide/slide-4.jpg'\r\n    ]\r\n\r\n    let slide = document.querySelector('.slide');\r\n    let btnLeft =  slide.querySelector('.arrow-left');\r\n    let btnrigth =  slide.querySelector('.arrow-right');\r\n    let count = 1;\r\n\r\n    btnLeft.addEventListener('click', function(){\r\n        count--;\r\n        if (count < 0) count = image.length-1;\r\n        slide.querySelector('img').src=image[count];\r\n    });\r\n\r\n    btnrigth.addEventListener('click', function(){\r\n        count++;\r\n        if (count == image.length) count = 0;\r\n        slide.querySelector('img').src=image[count];\r\n    });\r\n\r\n})();\n\n//# sourceURL=webpack:///./src/assets/javascript/entry.js?");

/***/ })

/******/ });