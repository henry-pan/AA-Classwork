import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";

class Game extends React.Component{
  constructor(props) {
    super(props);

    const board = new Minesweeper.Board(9, 10);

    this.state = { board: board };

    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagging) {
    flagging ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  }

  restartGame() {
    const board = new Minesweeper.Board(9, 10);
    this.setState({board: board});
  }

  render() {

    let gameOver, modal;
    if (this.state.board.lost()) gameOver = "You lose.";
    if (this.state.board.won()) gameOver = "You win.";
    if (gameOver) {
      modal = <div className="modal-screen"> 
        <div className='modal-content'>
          <h1>{gameOver}</h1>
          <button onClick={this.restartGame}>Play Again</button>
        </div>
      </div>;
    }

    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        {modal}
      </div>
    );
  }

}

export default Game;
