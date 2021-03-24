import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";

class Game extends React.Component{
  constructor(props) {
    super(props);

    const board = new Minesweeper.Board(9, 10);

    this.state = { board: board };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagging) {
    flagging ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  }

  render() {

    let gameOver;
    if (this.state.board.lost()) gameOver = "You lose.";
    if (this.state.board.won()) gameOver = "You win.";

    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        <p>{gameOver}</p>
      </div>
    );
  }

}

export default Game;
