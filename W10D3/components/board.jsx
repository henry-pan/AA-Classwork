import React from "react";
import Tile from "./tile";

class Board extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const board = this.props.board;
    const boardRows = board.grid.map((row, i) => {
      return (
        <div className="row" key={`row-${i}`}>
          {row.map((tile, j) => {
            return (<Tile tile={tile}
              updateGame={this.props.updateGame}
              key={`${i}-${j}`}/>);
            }
          )}
        </div>
      );
    });
    
    return (
      <div className="board">{boardRows}</div>
    );
  }
}

export default Board;
