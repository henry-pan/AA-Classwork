require "colorize"
require_relative "cursor"
require_relative "board"

class Display

  attr_reader :board

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0,0], @board)
  end

  def render
    @board.rows.each do |row|
      str = []
      row.each { |col| str << col.to_s}
      puts str.join(" ")
    end
  end

end

b = Board.new
d = Display.new(b)
d.render