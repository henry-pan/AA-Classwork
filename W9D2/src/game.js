const Asteroid = require("./asteroid");
const Ship = require("./ship");

function Game (options) {
  this.DIM_X = options.x;
  this.DIM_Y = options.y;
  this.NUM_ASTEROIDS = options.num;
  this.asteroids = [];
    this.ship = new Ship({ pos: this.randomPosition(this.DIM_X, this.DIM_Y), game: this})

  this.addAsteroids();

}

Game.prototype.addAsteroids = function () {
  let that = this;
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let ast = new Asteroid({pos: this.randomPosition(this.DIM_X, this.DIM_Y), game: that});
    this.asteroids.push(ast);
  }
}

Game.prototype.randomPosition = function (maxX, maxY) {
  let x = Math.floor(Math.random() * (maxX + 1));
  let y = Math.floor(Math.random() * (maxY + 1));

  return [x, y];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  let allObjects = this.allObjects();

  for (let i = 0; i < allObjects.length; i++) {
    allObjects[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
    let allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    allObjects[i].move();
  }
}

Game.prototype.wrap = function (pos) {
  let [x,y] = [pos[0], pos[1]];

  if (x > this.DIM_X) x -= this.DIM_X;
  if (x < 0) x += this.DIM_X;
  if (y > this.DIM_Y) y -= this.DIM_Y;
  if (y < 0) y += this.DIM_Y;

  return [x, y];
}

Game.prototype.checkCollisions = function () {
    let allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = i+1; j < allObjects.length; j++) {
      if (allObjects[i].isCollidedWith(allObjects[j])){
        allObjects[i].collideWith(allObjects[j]);
      }
    }
  }
}

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.remove = function (asteroid) {
  let index = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(index, 1);
}

Game.prototype.allObjects = function() {
    let array = this.asteroids.slice();
    array.push(this.ship);
    return array;
}

module.exports = Game;
