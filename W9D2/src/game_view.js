const Game = require("./game");

function GameView (game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let that = this;
  setInterval(function() { that.game.step()}, 20);
  setInterval(function() { that.game.draw(that.ctx)}, 20);
}

module.exports = GameView;
