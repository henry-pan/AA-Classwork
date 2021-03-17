const MovingObject = require("./moving_object");
const Util = require("./utils");
const Ship = require("./ship");

const astOptions = {
  COLOR: "#404040",
  RADIUS: 30
}

function Asteroid (options)  {
  MovingObject.call(this, {pos: options.pos, vel: Util.randomVec(2), color: astOptions.COLOR, radius: astOptions.RADIUS, game: options.game});
}


Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
}

module.exports = Asteroid;