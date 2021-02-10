require "singleton"

module Slideable
  attr_reader :moves

  HORIZONTAL_DIRS = [[0,1],[0,-1],[1,0],[-1,0]]
  DIAGONAL_DIRS = [[1,1],[-1,-1],[1,-1],[-1,1]]

  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves
    slide_moves = []    
    move_dirs.each do |dir|
      dx, dy = dir 
      slide_moves += grow_unblocked_moves_in_dir(dx, dy)
    end
    slide_moves
  end

  def grow_unblocked_moves_in_dir(dx, dy)
    unblocked_moves = []
    current_pos = self.pos

    i = current_pos[0] + dx
    j = current_pos[1] + dy
    while i >= 0 && i <= 7 && j >= 0 && j <= 7 
      if @board[[i, j]].is_a?(NullPiece)  
        unblocked_moves << [i, j]
      elsif @board[[i, j]].color != self.color
        unblocked_moves << [i, j]
        break
      else
        break
      end
      i += dx  
      j += dy
    end
    unblocked_moves
  end

end

module Stepable

end

class Piece

  attr_reader :color, :board, :pos, :symbol

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

end

class NullPiece < Piece

  include Singleton
  
  attr_reader :symbol 

  def initialize
    @null_piece = nil
  end

end

class Queen < Piece

  include Slideable
  
  attr_reader :symbol 

  def move_dirs  
    diagonal_dirs + horizontal_dirs
  end

end

class Rook < Piece

  include Slideable
  
  attr_reader :symbol 

  def move_dirs  
    horizontal_dirs
  end

end

class Bishop < Piece

  include Slideable

  attr_reader :symbol  

  def move_dirs
    diagonal_dirs
  end

end

class Pawn < Piece

  attr_reader :symbol

  def moves
    forward_steps + side_attacks
  end

  private
  def at_start_row?
    if color == "white" && pos[0] == 6
      return true
    elsif color == "black" && pos[0] == 1
      return true
    end
    false
  end
  
  def forward_dir
    color == "white" ? -1 : 1
  end

  def forward_steps
    steps = []
    current_pos = self.pos
    i = current_pos[0] + forward_dir
    j = current_pos[1] 

    if at_start_row?
      steps << [i, j] if @board[[i, j]].is_a?(NullPiece)  
      i += forward_dir  
      steps << [i, j] if @board[[i, j]].is_a?(NullPiece) 
    else
      steps << [i, j] if @board[[i, j]].is_a?(NullPiece)
    end
  end


  def side_attacks
    steps = []
    current_pos = self.pos
    i = current_pos[0] + forward_dir
    j = current_pos[1] 

    steps << [i, j-1] if j-1 >= 0 && @board[[i, j-1]].color != self.color
    steps << [i, j+1] if j+1 <= 7 && @board[[i, j+1]].color != self.color 
  end

end