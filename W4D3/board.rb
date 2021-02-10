require_relative "piece"

class Board

  attr_reader :rows

  def initialize
    @null_piece = NullPiece.instance
    @rows = Array.new(8) { Array.new(8, @null_piece) }
    populate_board
  end

  def populate_board
    @rows[0].each_with_index { |col, i| @rows[0][i] = Piece.new("black", self, [0,i]) }
    @rows[1].each_with_index { |col, i| @rows[1][i] = Rook.new("black", self, [1,i]) }
    @rows[6].each_with_index { |col, i| @rows[6][i] = Piece.new("white", self, [6,i]) }
    @rows[7].each_with_index { |col, i| @rows[7][i] = Piece.new("white", self, [7,i]) }
  end

  def [](pos)
    row, col = pos
    @rows[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @rows[row][col] = val
  end

  def move_piece(start_pos, end_pos)
    sx = start_pos[0]
    sy = start_pos[1]
    ex = end_pos[0]
    ey = end_pos[1]

    raise "Start position is out of bounds" if sx < 0 || sx > 7 || sy < 0 || sy > 7
    raise "End position is out of bounds" if ex < 0 || ex > 7 || ey < 0 || ey > 7

    raise "Start position is empty" if self[start_pos] == @null_piece
    raise "End position contains own piece" if self[start_pos].color == self[end_pos].color

    self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
  end

end

b = Board.new
# p b
# puts b[[0,0]]
# puts b[[2,2]]
# b.move_piece([0,0],[2,2])
# puts b[[0,0]]
# puts b[[2,2]]
# b.move_piece([234,123],[2,2]) # Start out of bound
# b.move_piece([0,0],[1,1]) # End has own piece
# b.move_piece([0,0],[2,123]) # End out of bound
# b.move_piece([3,3],[2,2]) # Empty start
p b[[1,1]].moves