const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.addEventListener ("DOMContentLoaded", function () {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext ("2d");
  const game = new Game({ x: canvas.width, y: canvas.height, num: 10 });
  game.draw(ctx);
  const gView = new GameView(game, ctx);
  gView.start();
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
