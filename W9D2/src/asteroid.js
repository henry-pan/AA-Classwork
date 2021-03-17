const MovingObject = require("./moving_object");
const Util = require("./utils");

const astOptions = {
  COLOR: "#404040",
  RADIUS: 30
}

function Asteroid (options)  {
  MovingObject.call(this, {pos: options.pos, vel: Util.randomVec(2), color: astOptions.COLOR, radius: astOptions.RADIUS, game: options.game});
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;