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

/***/ "./src/assets/javascript/carousel.js":
/*!*******************************************!*\
  !*** ./src/assets/javascript/carousel.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Carousel {\r\n    constructor ({ numItems, width, left, right, boxContainer }) {      \r\n        this.NumItems = numItems;\r\n        this.TotalWidth = numItems * width;\r\n        this.Width = width;\r\n        this.ButtonLeft = document.querySelector(left);\r\n        this.ButtonRight = document.querySelector(right);\r\n        this.BoxContainer = document.querySelector(boxContainer);\r\n        this.Margin = 0;\r\n\r\n        this.bindEvents();\r\n        this.moveToLeft = this.moveToLeft.bind(this);\r\n        this.moveToRight = this.moveToRight.bind(this);\r\n    }\r\n\r\n    bindEvents () {\r\n        this.ButtonLeft.addEventListener('click', () => { this.moveToLeft(); });\r\n        this.ButtonRight.addEventListener('click', () => { this.moveToRight(); });\r\n    }\r\n\r\n    moveToLeft () {\r\n        if (this.Margin != 0) this.Margin = this.Margin + this.Width;\r\n        this.BoxContainer.style.marginLeft = this.Margin + '%';\r\n    }\r\n\r\n    moveToRight () {\r\n        if ((this.Margin * -1) != (this.TotalWidth - this.Width)) this.Margin = this.Margin - this.Width;\r\n        this.BoxContainer.style.marginLeft = this.Margin + '%';\r\n    }\r\n\r\n}\r\n\r\nvar widthOfDemo = 0;\r\nvar widthOfProyect = 0;\r\n\r\nfunction myFunction(x) {\r\n    if (x.matches) { // If media query matches\r\n        widthOfDemo = 50;\r\n        widthOfProyect = 50;\r\n    } else {\r\n        widthOfDemo = 100;\r\n        widthOfProyect = 100;\r\n        //document.body.style.backgroundColor = \"pink\";\r\n    }\r\n}\r\n\r\nvar x = window.matchMedia(\"(min-width: 680px)\")\r\n    myFunction(x) \r\n    x.addListener(myFunction)\r\n\r\nif (document.querySelector('body[data-page=\"proyects\"]') != null) {\r\n    new Carousel({\r\n        numItems: 3,\r\n        width: widthOfDemo,\r\n        left: '.demo-page .arrow-left',\r\n        right: '.demo-page .arrow-right',\r\n        boxContainer: '.demo-page .row'\r\n    });\r\n    \r\n    new Carousel({\r\n        numItems: 6,\r\n        width: widthOfProyect,\r\n        left: '.proyects-page .arrow-left',\r\n        right: '.proyects-page .arrow-right',\r\n        boxContainer: '.proyects-page .row'\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/javascript/carousel.js?");

/***/ }),

/***/ "./src/assets/javascript/entry.js":
/*!****************************************!*\
  !*** ./src/assets/javascript/entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ \"./src/assets/css/app.scss\");\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frameworks_buttons_mdl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frameworks/buttons_mdl.js */ \"./src/assets/javascript/frameworks/buttons_mdl.js\");\n/* harmony import */ var _frameworks_buttons_mdl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_frameworks_buttons_mdl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frameworks_form_mdl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frameworks/form_mdl.js */ \"./src/assets/javascript/frameworks/form_mdl.js\");\n/* harmony import */ var _frameworks_form_mdl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_frameworks_form_mdl_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.js */ \"./src/assets/javascript/carousel.js\");\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\n(function(){\r\n    /* CALENDAR OF QUOTATION */\r\n\r\n    let scheduledBtn = document.querySelector('button.scheduled-btn');\r\n\r\n    if (scheduledBtn != null) scheduledBtn.addEventListener('click', showCalendar);\r\n\r\n    function showCalendar (e) {\r\n        e.preventDefault();\r\n\r\n        let calendar = document.querySelector('.container-calendar');\r\n        e.target.parentElement.appendChild(calendar);\r\n        calendar.classList.toggle('active');\r\n    } \r\n\r\n\r\n    /* BUTTONS OF INDEX */\r\n\r\n    let iframePages = [\r\n        { class : '.type-page-container', status : false },\r\n        { class : '.demo-index', status : false }\r\n    ]\r\n\r\n    let index = 0;\r\n    let btnDown = document.querySelector('.arrow-down');\r\n    let btnUp = document.querySelector('.arrow-up');\r\n\r\n    if (btnDown != null) btnDown.addEventListener('click', moveDown);\r\n    if (btnUp != null) btnUp.addEventListener('click', moveUp);\r\n\r\n    function moveDown () {\r\n        let card = document.querySelector(iframePages[index].class);\r\n        card.classList.add('show');\r\n\r\n        index++;\r\n        buttonsUpAndDown();\r\n    }\r\n\r\n    function moveUp () {\r\n        index--;\r\n        buttonsUpAndDown();\r\n        let card = document.querySelector(iframePages[index].class);\r\n        card.classList.remove('show');\r\n    }\r\n\r\n    function buttonsUpAndDown(){\r\n        index != 0 ? btnUp.classList.add('show') : btnUp.classList.remove('show');\r\n        index == 2 ? btnDown.classList.add('hidden') : btnDown.classList.remove('hidden');\r\n    }\r\n\r\n\r\n    if (document.querySelector('body[data-page=\"proyects\"]') != null) document.querySelector('html').style.overflowY = 'scroll'; \r\n    \r\n    \r\n    /* OPTIONS OF CV BY ABOUT ME */\r\n\r\n    let BtnDescription = document.querySelector('.btn-description');\r\n    let BtnEducation = document.querySelector('.btn-education');\r\n    let BtnSkills = document.querySelector('.btn-skills');\r\n\r\n    BtnDescription.addEventListener('click', ()=>{\r\n        document.querySelector('.cv .row').style.marginLeft = 0;\r\n    });\r\n    BtnEducation.addEventListener('click', ()=>{\r\n        document.querySelector('.cv .row').style.marginLeft = -100 + '%';\r\n    });\r\n    BtnSkills.addEventListener('click', ()=>{\r\n        document.querySelector('.cv .row').style.marginLeft = -200 + '%';\r\n    });\r\n\r\n    /* Menu */\r\n/*\r\n    let pages = [\r\n        { title: 'index', place: 0 },\r\n        { title: 'proyects', place: 1 },\r\n        { title: 'aboutme', place: 2 },\r\n        { title: 'contact', place: 3 }\r\n    ];\r\n\r\n    let dataPage = document.querySelector('body').getAttribute('data-page');\r\n    let menu = document.querySelectorAll('nav a');\r\n\r\n    pages.forEach((page) => {\r\n        if (page.title === dataPage) menu[page.place].classList.add('active');\r\n    })\r\n\r\n    function moveToRight (top) {\r\n        if(top === 0) { top = -100; }\r\n        else if(top === -100) { top = 100; }\r\n        else if(top === 100) { top = 0; }\r\n\r\n        return top;\r\n    }\r\n\r\n    function moveToLeft (top) {\r\n        if(top === 0) { top = 100; }\r\n        else if(top === 100) { top = -100; }\r\n        else if(top === -100) { top = 0; }\r\n\r\n        return top;\r\n    }\r\n\r\n    let elements = [\r\n        { number: 0, name: \"slide\" },\r\n        { number: 100, name: \"proyects\" },\r\n        { number: -100, name: \"about-me\" }\r\n    ]\r\n\r\n    let btnLeft = document.querySelector('.buttons-bar-down .arrow-left');\r\n\r\n    if (btnLeft != null)\r\n        btnLeft.addEventListener('click', moveCardToLeft);\r\n\r\n\r\n    let btnRight = document.querySelector('.buttons-bar-down .arrow-right');\r\n\r\n    if (btnRight != null)\r\n        btnRight.addEventListener('click', moveCardToRight);\r\n    \r\n    function moveCardToRight () {\r\n        elements.forEach(e => {\r\n\r\n            document.querySelector('.' + e.name).style.opacity = \"0\";\r\n            document.querySelector('.' + e.name).style.zIndex = \"0\";\r\n            e.number = moveToRight(e.number);\r\n            if (e.number == 0 ) { \r\n                document.querySelector('.' + e.name).style.opacity = \"1\";\r\n                document.querySelector('.' + e.name).style.zIndex = \"1\";\r\n            }\r\n            document.querySelector('.' + e.name).style.left = e.number + \"%\";\r\n\r\n        })\r\n    }\r\n\r\n    function moveCardToLeft () {\r\n        elements.forEach(e => {\r\n            document.querySelector('.' + e.name).style.opacity = \"0\";\r\n            document.querySelector('.' + e.name).style.zIndex = \"0\";\r\n            e.number = moveToLeft(e.number);\r\n            if (e.number == 0 ) { \r\n                document.querySelector('.' + e.name).style.opacity = \"1\";\r\n                document.querySelector('.' + e.name).style.zIndex = \"1\";\r\n            }\r\n            document.querySelector('.' + e.name).style.left = e.number + \"%\";\r\n\r\n        })\r\n    }\r\n  \r\n\r\n    /* Media Query \r\n    function myFunction(x) {\r\n        if (x.matches) { // If media query matches\r\n              /* Mover Slide \r\n\r\n            let slide = document.querySelector('.slide .container');\r\n            console.log(slide.parentElement);\r\n            slide.parentElement.remove();\r\n\r\n            let header = document.querySelector('header');\r\n\r\n            header.appendChild(slide)\r\n            //document.body.style.backgroundColor = \"yellow\";\r\n        } else {\r\n            //document.body.style.backgroundColor = \"pink\";\r\n        }\r\n    }\r\n    \r\n    var x = window.matchMedia(\"(min-width: 900px)\")\r\n    myFunction(x) \r\n    x.addListener(myFunction)\r\n*/\r\n\r\n\r\n})();\n\n//# sourceURL=webpack:///./src/assets/javascript/entry.js?");

/***/ }),

/***/ "./src/assets/javascript/frameworks/buttons_mdl.js":
/*!*********************************************************!*\
  !*** ./src/assets/javascript/frameworks/buttons_mdl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Ripple {\r\n    constructor(selector){\r\n      this.buttons = document.querySelectorAll(selector);\r\n      this.bindEvents();\r\n    }\r\n    \r\n    bindEvents(){\r\n      for(let button of this.buttons){\r\n        button.addEventListener(\"click\", (e)=>{\r\n          let coords = {\r\n            x: e.x,\r\n            y: e.y\r\n          }\r\n          \r\n          let rect = e.target.getBoundingClientRect();\r\n          \r\n          let clickPosition = {\r\n            x: coords.x - rect.left,\r\n            y: coords.y - rect.top\r\n          }\r\n          \r\n          let ripple = document.createElement(\"span\");\r\n          let color = e.target.getAttribute(\"data-ripple\") == \"dark\" ? \"black\" : \"white\";\r\n          let styles = `\r\n            position: absolute;\r\n            top: ${clickPosition.y - rect.width}px;\r\n            left: ${clickPosition.x -rect.width}px;\r\n            width: ${rect.width * 2}px;\r\n            height: ${rect.width * 2}px;\r\n            border-radius: 50%;\r\n            background: ${color};\r\n            opacity: 0.56;\r\n            transform: scale(0);\r\n            transition: all 0.3s cubic-bezier(0.3, 0.0, 0.2, 1);\r\n          `;\r\n          ripple.style.cssText = styles;\r\n          \r\n          \r\n          setTimeout(()=>{\r\n            ripple.style.transform = 'scale(1)';\r\n            ripple.style.opacity = '0';\r\n          },50);\r\n          \r\n          e.target.appendChild(ripple);\r\n          \r\n          setTimeout(()=>{\r\n            ripple.remove();\r\n          },350);\r\n          \r\n          \r\n        });\r\n      }\r\n    }\r\n  }\r\n  \r\n  new Ripple(\".mdl-ripple\");\r\n  \n\n//# sourceURL=webpack:///./src/assets/javascript/frameworks/buttons_mdl.js?");

/***/ }),

/***/ "./src/assets/javascript/frameworks/form_mdl.js":
/*!******************************************************!*\
  !*** ./src/assets/javascript/frameworks/form_mdl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class InputMD {\r\n\tconstructor(selector){\r\n\t\tthis.input = document.querySelectorAll(selector);\r\n\t\tthis.bindEvents();\r\n\t}\r\n\r\n\tbindEvents(){\r\n\t\tthis.input.forEach( \r\n\t\t\titem => item.addEventListener(\"keyup\",this.activeInput)\r\n\t\t);\r\n\t}\r\n\r\n\tactiveInput(e){\r\n\t\tif (e.target.value == \"\") return e.target.classList.remove(\"non-empty\");\r\n\r\n\t\te.target.classList.add(\"non-empty\");\r\n\t}\r\n}\r\n\r\n(function(){\r\n\tnew InputMD(\".input-form input\");\r\n})();\n\n//# sourceURL=webpack:///./src/assets/javascript/frameworks/form_mdl.js?");

/***/ })

/******/ });