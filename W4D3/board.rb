require_relative "piece"

class Board

  attr_reader :rows

  def initialize
    @null_piece = NullPiece.instance
    @rows = Array.new(8) { Array.new(8, @null_piece) }
    populate_board
  end

  def populate_board
    @rows[1].each_with_index { |col, i| @rows[1][i] = Pawn.new("black", self, [1,i]) }
    @rows[0][0] = Rook.new("black", self, [0,0])
    @rows[0][1] = Knight.new("black", self, [0,1])
    @rows[0][2] = Bishop.new("black", self, [0,2])
    @rows[0][3] = Queen.new("black", self, [0,3])
    @rows[0][4] = King.new("black", self, [0,4])
    @rows[0][5] = Bishop.new("black", self, [0,5])
    @rows[0][6] = Knight.new("black", self, [0,6])
    @rows[0][7] = Rook.new("black", self, [0,7])

    @rows[6].each_with_index { |col, i| @rows[6][i] = Pawn.new("white", self, [6,i]) }
    @rows[7][0] = Rook.new("white", self, [7,0])
    @rows[7][1] = Knight.new("white", self, [7,1])
    @rows[7][2] = Bishop.new("white", self, [7,2])
    @rows[7][3] = Queen.new("white", self, [7,3])
    @rows[7][4] = King.new("white", self, [7,4])
    @rows[7][5] = Bishop.new("white", self, [7,5])
    @rows[7][6] = Knight.new("white", self, [7,6])
    @rows[7][7] = Rook.new("white", self, [7,7])
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

    puts "Moving (#{self[start_pos].color} #{self[start_pos].symbol}) #{start_pos} to #{end_pos}"
    self[end_pos], self[start_pos] = self[start_pos], self[end_pos]

    self[end_pos].pos = end_pos

  end

end

b = Board.new
# b.move_piece([234,123],[2,2]) # Start out of bound
# b.move_piece([0,0],[1,1]) # End has own piece
# b.move_piece([0,0],[2,123]) # End out of bound
# b.move_piece([3,3],[2,2]) # Empty start
p "Black Pawn: #{b[[1,1]].moves}"
b.move_piece([1,1], [3,1])
p "Black Pawn: #{b[[3,1]].moves}"
# p "Black Rook: #{b[[0,0]].moves}"
p "Black Knight: #{b[[0,1]].moves}"
b.move_piece([0,1], [2,2])
b.move_piece([2,2], [4,3])
p "Black Knight: #{b[[4,3]].moves}"
# p "Black Bishop: #{b[[0,2]].moves}"
# p "Black Queen: #{b[[0,3]].moves}"
# p "Black King: #{b[[0,4]].moves}"
# p "White Pawn: #{b[[6,6]].moves}"
# p "White Rook: #{b[[7,0]].moves}"
# p "White Knight: #{b[[7,1]].moves}"
# p "White Bishop: #{b[[7,2]].moves}"
# p "White Queen: #{b[[7,3]].moves}"♟
# p "White King: #{b[[7,4]].moves}" #
#p "🏰🦄🧙👸👑🧙🦄🏰🗡️ 🗡️ 🗡️ 🗡️ 🗡️ 🗡️ 🗡️ 🗡️"