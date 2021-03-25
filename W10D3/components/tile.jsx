import React from "react";

class Tile extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const flagging = e.altKey;
    this.props.updateGame(this.props.tile, flagging);
  }
  
  render() {
    const tile = this.props.tile;
    let tileText, tileClass, bombCount;
    bombCount = "";
    if (tile.explored) {
      if (tile.bombed) {
        tileText = "💥";
        tileClass = "bombed";
      } else {
        bombCount = tile.adjacentBombCount();
        tileText = bombCount > 0 ? bombCount : "  ";
        bombCount = ` bombs-${bombCount}`
        tileClass = "explored";
      }
    } else if (tile.flagged) {
      tileText = "🚩";
      tileClass = "flagged";
    } else {
      tileClass = "unexplored";
    }
    tileClass = `tile ${tileClass}${bombCount}`;

    return (
      <div className={tileClass} onClick={this.handleClick}>{tileText}</div>
      );
    }
  }
  
  export default Tile;
