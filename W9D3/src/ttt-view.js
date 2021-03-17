class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents(); 
  }

  bindEvents() {
    this.$el.on("click", "li", e => { 
      const $square= $(e.currentTarget); 
      this.makeMove($square); 
    }); 
  }

  makeMove($square) {
    const pos= $square.data("pos"); 
    const currentPlayer= this.game.currentPlayer; 
    try{ 
      this.game.playMove(pos);
    } catch (e){ 
      alert ("Invalid Move, Try Again!"); 
      return; 
    } 
    $square.text(currentPlayer); 
    $square.addClass(currentPlayer); 
    if (this.game.isOver()){  
      this.$el.off("click");
      const figcaption= $("<figcaption>"); 
      if (this.game.winner()){
        figcaption.text(`${this.game.winner()} has won!`);
      }else{
        figcaption.text("It's a Draw!"); 
      }
      this.$el.append(figcaption); 
    } 

  }

  setupBoard() {
    const $ul = $("<ul>");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.data("pos", [i, j]); 
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
