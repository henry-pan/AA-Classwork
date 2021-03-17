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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nconst astOptions = {\n  COLOR: \"#404040\",\n  RADIUS: 30\n}\n\nfunction Asteroid (options)  {\n  MovingObject.call(this, {pos: options.pos, vel: Util.randomVec(2), color: astOptions.COLOR, radius: astOptions.RADIUS, game: options.game});\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://W9D2/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game (options) {\n  this.DIM_X = options.x;\n  this.DIM_Y = options.y;\n  this.NUM_ASTEROIDS = options.num;\n  this.asteroids = [];\n\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function () {\n  let that = this;\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    let ast = new Asteroid({pos: this.randomPosition(this.DIM_X, this.DIM_Y), game: that});\n    this.asteroids.push(ast);\n  }\n}\n\nGame.prototype.randomPosition = function (maxX, maxY) {\n  let x = Math.floor(Math.random() * (maxX + 1));\n  let y = Math.floor(Math.random() * (maxY + 1));\n\n  return [x, y];\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n}\n\nGame.prototype.wrap = function (pos) {\n  let [x,y] = [pos[0], pos[1]];\n\n  if (x > this.DIM_X) x -= this.DIM_X;\n  if (x < 0) x += this.DIM_X;\n  if (y > this.DIM_Y) y -= this.DIM_Y;\n  if (y < 0) y += this.DIM_Y;\n\n  return [x, y];\n}\n\nGame.prototype.checkCollisions = function () {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    for (let j = i+1; j < this.asteroids.length; j++) {\n      if (this.asteroids[i].isCollidedWith(this.asteroids[j])){\n        this.asteroids[i].collideWith(this.asteroids[j]);\n      }\n    }\n  }\n}\n\nGame.prototype.step = function () {\n  this.moveObjects();\n  this.checkCollisions();\n}\n\nGame.prototype.remove = function (asteroid) {\n  let index = this.asteroids.indexOf(asteroid);\n  this.asteroids.splice(index, 1);\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://W9D2/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  setInterval(function() { that.game.step()}, 20);\n  setInterval(function() { that.game.draw(that.ctx)}, 20);\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack://W9D2/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener (\"DOMContentLoaded\", function () {\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext (\"2d\");\n  const game = new Game({ x: canvas.width, y: canvas.height, num: 10 });\n  game.draw(ctx);\n  const gView = new GameView(game, ctx);\n  gView.start();\n});\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\n\n\n//# sourceURL=webpack://W9D2/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);\n  ctx.strokeStyle = this.color;\n  ctx.fillStyle = this.color;\n  ctx.lineWidth = 10;\n  ctx.fill();\n  ctx.stroke();\n}\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  let distance = (this.pos[0] - otherObject.pos[0])**2 + (this.pos[1] - otherObject.pos[1])**2;\n  distance = distance ** 0.5;\n  return (this.radius + otherObject.radius) >= distance;\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n  this.game.remove(otherObject);\n  this.game.remove(this);\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack://W9D2/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate () {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack://W9D2/./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;