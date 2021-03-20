/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\nconst clockElement = document.querySelector(\"#clock\");\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const date = new Date();\n    // 2. Store the hours, minutes, and seconds.\n    this.hours = date.getHours();\n    this.minutes = date.getMinutes();\n    this.seconds = date.getSeconds();\n    // 3. Call printTime.\n    this.printTime();\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    // Use console.log to print it.\n    let formattedHours = this.hours%12 <= 9 ? `0${this.hours%12}` : this.hours%12;\n    let formattedMins = this.minutes <= 9 ? `0${this.minutes}` : this.minutes;\n    let formattedSecs = this.seconds <= 9 ? `0${this.seconds}` : this.seconds;\n    let str = `${formattedHours}:${formattedMins}:${formattedSecs}`;\n    (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(str, clockElement);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    // 2. Call printTime.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this.minutes += 1;\n    }\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this.hours += 1;\n    }\n    if (this.hours === 24) {\n      this.hours = 0;\n    }\n\n    this.printTime();\n  }\n}\n\nconst clock = new Clock();\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator () {\n  const dogArr = [];\n  for (const [key, value] of Object.entries(dogs)) {\n    const a = document.createElement(\"a\");\n    a.innerHTML = key;\n    a.href = value;\n    const li = document.createElement(\"li\");\n    li.classList.add(\"dog-link\");\n    li.append(a);\n    dogArr.push(li);\n  }\n  return dogArr;\n}\n\nfunction attachDogLinks () {\n  const dogsLinks = dogLinkCreator();\n  const ul = document.querySelector(\".drop-down-dog-list\");\n  for (let i = 0; i < dogsLinks.length; i++) {\n    ul.append(dogsLinks[i]);\n  }\n}\n\nfunction handleEnter (e) {\n  e.preventDefault();\n  Array.from(dogList.children).forEach((dog) => dog.classList.add(\"open\"));\n}\n\nfunction handleLeave (e) {\n  e.preventDefault();\n  Array.from(dogList.children).forEach((dog) => dog.classList.remove(\"open\"));\n}\n\nconst dogNav = document.querySelector(\".drop-down-dog-nav\");\nconst dogList = document.querySelector(\".drop-down-dog-list\");\ndogNav.addEventListener(\"mouseenter\", handleEnter);\ndogNav.addEventListener(\"mouseleave\", handleLeave);\n\nattachDogLinks();\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("const lsTodos = JSON.parse(localStorage.getItem('todos')) || [];\nconst todoClass = document.querySelector('.todos');\n\n\nfunction addTodo (e) {\n  e.preventDefault();\n  const input = document.querySelector('input[name=\"add-todo\"]');\n  const value = input.value;\n  const todos = { value, done: false };\n  lsTodos.push(todos);\n  localStorage.setItem(\"todos\", JSON.stringify(lsTodos));\n\n  populateList();\n}\n\nfunction populateList () {\n  todoClass.innerHTML = lsTodos.map((item) => {\n    return `<li>${item.value}</li>`;\n  }).join(\" \");\n}\n\n\nconst submitButton = document.querySelector('.add-todo-form');\nsubmitButton.addEventListener(\"submit\", addTodo);\npopulateList();\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\n// converts a string to a p tag and appends it to an element\nconst htmlGenerator = (string, htmlElement) => {\n  const p = document.createElement('p');\n  const q = document.createElement('p');\n  q.innerText = string;\n  p.innerText = string;\n  // htmlElement.append(p, q); // append takes many params (as many as you want)\n  if (Array.from(htmlElement.children).length > 0) {\n    htmlElement.removeChild(htmlElement.firstChild);\n  }\n  htmlElement.appendChild(p); // appendChild only takes one param. additional params passed in won't work\n}; \n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;