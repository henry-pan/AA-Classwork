const MovingObject = require("./moving_object");
const Util = require("./utils")

const shipOptions = {
    COLOR: "purple",
    RADIUS: 15
}

function Ship(options) {
    MovingObject.call(this, { pos: options.pos, vel: [0, 0], color: shipOptions.COLOR, radius: shipOptions.RADIUS, game: options.game });
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition(this.game.DIM_X, this.game.DIM_Y);
    this.vel = [0, 0];
}

module.exports = Ship;