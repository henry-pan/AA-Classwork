const Asteroid = require("./asteroid");

function Game (options) {
    this.DIM_X = options.x;
    this.DIM_Y = options.y;
    this.NUM_ASTEROIDS = options.num;
    this.asteroids = [];

    this.addAsteroids();

}

Game.prototype.addAsteroids = function () {
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
        let ast = new Asteroid({pos: this.randomPosition(this.DIM_X, this.DIM_Y)});
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

    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}



module.exports = Game;