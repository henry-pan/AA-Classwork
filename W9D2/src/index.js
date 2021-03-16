const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.addEventListener ("DOMContentLoaded", function () {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext ("2d");
  const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });
  mo.draw(ctx);
  const ast = new Asteroid({ pos: [100, 100] });
  ast.draw(ctx);
  console.log("asteroid pos", ast.pos);
  console.log("asteroid vel", ast.vel);
  console.log("asteroid color", ast.color);
  console.log("asteroid radius", ast.radius);
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;