require "singleton"

module Slideable

  HORIZONTAL_DIRS = []
  DIAGONAL_DIRS = []

  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves

  end



end

module Stepable

end

class Piece

  attr_reader :color, :board, :pos

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

end

class NullPiece < Piece

  include Singleton

  def initialize
    @null_piece = nil
  end

end

