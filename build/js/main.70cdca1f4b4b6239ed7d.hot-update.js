/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepenobloki"]("main",{

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar activateHeader = function activateHeader() {\n  var swapArrow = document.querySelector('.header__swap');\n  var swapNumber = document.querySelectorAll('.header__phone')[1];\n  var burger = document.querySelector('.burger');\n  var overlay = document.querySelector('.overlay');\n  var nav = document.querySelector('.nav');\n\n  var lockScroll = function lockScroll() {\n    document.body.classList.add('lock');\n  };\n\n  var unlockScroll = function unlockScroll() {\n    document.body.classList.remove('lock');\n  };\n\n  overlay.addEventListener('click', function () {\n    nav.classList.toggle('transform');\n    burger.classList.toggle('transform');\n    overlay.classList.toggle('open');\n    unlockScroll();\n  });\n  swapArrow.addEventListener('click', function () {\n    swapArrow.classList.toggle('transform');\n    swapNumber.classList.toggle('transform');\n  });\n  burger.addEventListener('click', function () {\n    ;\n    nav.classList.toggle('transform');\n    overlay.classList.toggle('open');\n\n    if (document.body.classList.contains('lock')) {\n      unlockScroll();\n      nav.classList.toggle('transform');\n      overlay.classList.toggle('open');\n    } else {\n      lockScroll();\n    }\n\n    burger.classList.toggle('transform');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateHeader);\n\n//# sourceURL=webpack://penobloki/./src/js/modules/header.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d28c03b068b8cead607a")
/******/ })();
/******/ 
/******/ }
);