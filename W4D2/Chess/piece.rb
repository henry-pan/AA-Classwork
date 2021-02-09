require "singleton"

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