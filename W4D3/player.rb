require_relative "cursor"

class Player

  attr_reader :color, :display

  def initialize(color, display)
    @color = color
    @display = display
  end

end

class HumanPlayer < Player

  def make_move(board)
    # input = gets_input
    # start_pos
    # end_pos
    input = gets.chomp.split(" ").map(&:to_i)
    start_pos = [input[0], input[1]]
    end_pos = [input[2], input[3]]
    board.move_piece(@color, start_pos, end_pos)
  end

end