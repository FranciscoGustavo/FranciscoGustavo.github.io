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

/***/ "./src/assets/javascript/arrays.js":
/*!*****************************************!*\
  !*** ./src/assets/javascript/arrays.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*class Slider {\r\n    constructor({ elements, animationFunc, speed }) {\r\n\r\n        this.elements = elements;\r\n        this.animationFunc = animationFunc;\r\n        this.index = 0;\r\n        this.size = elements.length;\r\n        this.speed = speed;\r\n\r\n        this.innerNext = this.innerNext.bind(this);\r\n        this.stop = this.stop.bind(this);\r\n        this.next = this.next.bind(this);\r\n        this.prev = this.prev.bind(this); \r\n    }\r\n    \r\n    innerNext(){\r\n        this.index++;\r\n        if (this.index >= this.size) this.index = 0;\r\n        this.animationFunc(this.elements[this.index]);\r\n    }  \r\n    \r\n    innerPrev(){\r\n        this.index--;\r\n        if (this.index < 0) this.index = this.size - 1;\r\n        this.animationFunc(this.elements[this.index]);\r\n    }  \r\n    \r\n    next(){\r\n        this.innerNext();\r\n        if (this.interval) {\r\n            this.stop();\r\n            this.play();\r\n        }\r\n    }  \r\n    \r\n    prev(){\r\n        this.innerPrev();\r\n        if (this.interval) {\r\n            this.stop();\r\n            this.play();\r\n        }\r\n    }  \r\n    \r\n    play(){\r\n        this.interval = setInterval(this.innerNext,this.speed);\r\n        \r\n    }\r\n    \r\n    stop(){\r\n        clearInterval(this.interval);\r\n    \r\n    }\r\n    \r\n}\r\n\r\n*/\r\n    /* Slider General  */\r\n/*\r\n    let elements = [\r\n        { title: \"Hola\", name: \"about-me\" },\r\n        { title: \"Hi\", name: \"proyects\" },\r\n        { title: \"Hello\", name: \"slide\" }\r\n    ]\r\n    \r\n    let Slide = new Slider ({\r\n        elements,\r\n        animationFunc,\r\n        speed: 1500\r\n    });\r\n\r\n    Slide.play();\r\n\r\n    \r\n\r\n    function animationFunc (item) {\r\n        let stylesItem = document.querySelector('.' + item.name );\r\n\r\n        stylesItem.style.left = 0\r\n        stylesItem.style.zIndez = 100;\r\n\r\n\r\n    }\r\n*/\r\n\r\n\r\n    \r\n   \r\n    \r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/javascript/arrays.js?");

/***/ }),

/***/ "./src/assets/javascript/entry.js":
/*!****************************************!*\
  !*** ./src/assets/javascript/entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ \"./src/assets/css/app.scss\");\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays.js */ \"./src/assets/javascript/arrays.js\");\n/* harmony import */ var _arrays_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_arrays_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n(function(){\r\n\r\n    /* Menu */\r\n\r\n    let pages = [\r\n        { title: 'index', place: 0 },\r\n        { title: 'proyects', place: 1 },\r\n        { title: 'aboutme', place: 2 },\r\n        { title: 'contact', place: 3 }\r\n    ];\r\n\r\n    let dataPage = document.querySelector('body').getAttribute('data-page');\r\n    let menu = document.querySelectorAll('nav a');\r\n\r\n    pages.forEach((page) => {\r\n        if (page.title === dataPage) menu[page.place].classList.add('active');\r\n    })\r\n\r\n    function moveToRight (top) {\r\n        if(top === 0) { top = -100; }\r\n        else if(top === -100) { top = 100; }\r\n        else if(top === 100) { top = 0; }\r\n\r\n        return top;\r\n    }\r\n\r\n    function moveToLeft (top) {\r\n        if(top === 0) { top = 100; }\r\n        else if(top === 100) { top = -100; }\r\n        else if(top === -100) { top = 0; }\r\n\r\n        return top;\r\n    }\r\n\r\n    let elements = [\r\n        { number: 0, name: \"slide\" },\r\n        { number: 100, name: \"proyects\" },\r\n        { number: -100, name: \"about-me\" }\r\n    ]\r\n\r\n    let btnLeft = document.querySelector('.buttons-bar-down .arrow-left');\r\n\r\n    btnLeft.addEventListener('click', () => {\r\n        elements.forEach(e => {\r\n            document.querySelector('.' + e.name).style.opacity = \"0\";\r\n            document.querySelector('.' + e.name).style.zIndex = \"0\";\r\n            e.number = moveToLeft(e.number);\r\n            if (e.number == 0 ) { \r\n                document.querySelector('.' + e.name).style.opacity = \"1\";\r\n                document.querySelector('.' + e.name).style.zIndex = \"1\";\r\n            }\r\n            document.querySelector('.' + e.name).style.left = e.number + \"%\";\r\n\r\n        })\r\n    });\r\n\r\n    let btnRight = document.querySelector('.buttons-bar-down .arrow-right');\r\n    btnRight.addEventListener('click', () => {\r\n        elements.forEach(e => {\r\n\r\n            document.querySelector('.' + e.name).style.opacity = \"0\";\r\n            document.querySelector('.' + e.name).style.zIndex = \"0\";\r\n            e.number = moveToRight(e.number);\r\n            if (e.number == 0 ) { \r\n                document.querySelector('.' + e.name).style.opacity = \"1\";\r\n                document.querySelector('.' + e.name).style.zIndex = \"1\";\r\n            }\r\n            document.querySelector('.' + e.name).style.left = e.number + \"%\";\r\n\r\n        })\r\n    });\r\n   \r\n  \r\n\r\n    /* Media Query */\r\n    function myFunction(x) {\r\n        if (x.matches) { // If media query matches\r\n              /* Mover Slide */\r\n\r\n            let slide = document.querySelector('.slide .container');\r\n            console.log(slide.parentElement);\r\n            slide.parentElement.remove();\r\n\r\n            let header = document.querySelector('header');\r\n\r\n            header.appendChild(slide)\r\n            //document.body.style.backgroundColor = \"yellow\";\r\n        } else {\r\n            //document.body.style.backgroundColor = \"pink\";\r\n        }\r\n    }\r\n    \r\n    var x = window.matchMedia(\"(min-width: 900px)\")\r\n    myFunction(x) \r\n    x.addListener(myFunction)\r\n\r\n})();\n\n//# sourceURL=webpack:///./src/assets/javascript/entry.js?");

/***/ })

/******/ });