/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepenobloki"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/js/modules/header.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/scroll'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)();\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/scroll'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\n//# sourceURL=webpack://penobloki/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './scroll'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar activateHeader = function activateHeader() {\n  var swapArrow = document.querySelector('.header__swap');\n  var swapNumber = document.querySelectorAll('.header__phone')[1];\n  var burger = document.querySelector('.burger');\n  var overlay = document.querySelector('.overlay');\n  var nav = document.querySelector('.nav');\n\n  var lockScroll = function lockScroll() {\n    document.body.classList.add('lock');\n  };\n\n  var unlockScroll = function unlockScroll() {\n    document.body.classList.remove('lock');\n  };\n\n  var smoothScroll = function smoothScroll() {\n    nav.addEventListener('click', function (e) {\n      var t = e.target;\n      var closest = t.closest('.nav__item');\n\n      if (closest) {\n        e.preventDefault();\n        var blockID = closest.querySelector('.nav__link').getAttribute('href').substr(1);\n        nav.classList.toggle('transform');\n        overlay.classList.toggle('open');\n        smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_1___default().polyfill();\n\n        if (document.body.classList.contains('lock')) {\n          unlockScroll();\n        } else {\n          lockScroll();\n        }\n\n        burger.classList.toggle('transform');\n        document.getElementById(blockID).scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      }\n    });\n  };\n\n  overlay.addEventListener('click', function () {\n    nav.classList.toggle('transform');\n    burger.classList.toggle('transform');\n    overlay.classList.toggle('open');\n    unlockScroll();\n  });\n  swapArrow.addEventListener('click', function () {\n    swapArrow.classList.toggle('transform');\n    swapNumber.classList.toggle('transform');\n  });\n  burger.addEventListener('click', function () {\n    ;\n    nav.classList.toggle('transform');\n    overlay.classList.toggle('open');\n\n    if (document.body.classList.contains('lock')) {\n      unlockScroll();\n    } else {\n      lockScroll();\n    }\n\n    burger.classList.toggle('transform');\n  });\n  smoothScroll();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateHeader);\n\n//# sourceURL=webpack://penobloki/./src/js/modules/header.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91a83bbe487fcae2ad03")
/******/ })();
/******/ 
/******/ }
);