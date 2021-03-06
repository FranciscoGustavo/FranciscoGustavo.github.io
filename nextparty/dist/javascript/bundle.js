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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ \"./src/assets/css/app.scss\");\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n(function(){\r\n  let btnMenu = document.querySelector('.btn-menu');\r\n  let menu = document.querySelector('.menu');\r\n\r\n  btnMenu.addEventListener('click', function(e){\r\n      iconToggle(btnMenu.querySelector('i'));\r\n      menu.classList.toggle('active');\r\n  });\r\n\r\n  function iconToggle(icon){\r\n    let barsIcon = 'fas fa-bars';\r\n    barsIcon == icon.className ? icon.className = 'fas fa-times' : icon.className = barsIcon;\r\n  }\r\n  \r\n  \r\n  let form = document.querySelector('#formContact');\r\n  if(form) {\r\n    form.addEventListener('submit', function(e){\r\n      e.preventDefault();\r\n      let formContainer = e.target.parentElement\r\n      console.log(e.target.remove());\r\n      formContainer.classList.add('sended');\r\n      formContainer.innerHTML = \"<h1>Mensaje enviado</h1>\"\r\n    });\r\n  }\r\n\r\n  let options = [\r\n    { page: 'index', item: 1 },\r\n    { page: 'events', item: 2 },\r\n    { page: 'grantour', item: 3 },\r\n    { page: 'contact', item: 4 }\r\n  ];\r\n\r\n  \r\n\r\n  let page = document.querySelector('body').getAttribute('data-page');\r\n\r\n  options.forEach(function(option){\r\n    option.page == page ? activeOptionMenu(option.item) : console.log(\"no es\");\r\n  });\r\n\r\n  \r\n\r\n  \r\n\r\n  function activeOptionMenu(element){\r\n    document.querySelector('nav a:nth-child(' + element + ')').classList.add('active');\r\n  }\r\n\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/assets/javascript/entry.js?");

/***/ })

/******/ });