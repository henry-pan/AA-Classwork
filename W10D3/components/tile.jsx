import React from "react";
import * as Minesweeper from "../minesweeper";

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const flagging = true;
    this.props.updateGame(this.props.tile, flagging);
  }
  
  render() {
    const tile = this.props.tile;
    let tileText, tileClass;
    if (tile.explored) {
      if (tile.bombed) {
        tileText = '💣 ';
        tileClass = 'bombed';
      } else {
        let bombCount = tile.adjacentBombCount();
        tileText = (bombCount > 0 ? bombCount : "  " );
        tileClass = 'explored';
      }
    } else if (tile.flagged) {
      tileText = '🚩';
      tileClass = 'flagged';
    } else {
      tileClass = 'unexplored';
    }
    tileClass = `tile ${tileClass}`
    return (
      <div className={tileClass} onClick={this.handleClick}>{tileText}</div>
      );
    }
  }
  
  export default Tile;