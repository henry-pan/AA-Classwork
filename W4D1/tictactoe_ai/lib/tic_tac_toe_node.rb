require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if @board.over?
      if @board.winner == evaluator || @board.winner == nil
        return false
      else
        return true
      end
    end

    if @next_mover_mark == evaluator
      return children.all? { |child| child.losing_node?(evaluator) }
    else
      return children.any? { |child| child.losing_node?(evaluator) }
    end

  end

  def winning_node?(evaluator)

    if @board.over?
      return @board.winner == evaluator
    end

    if @next_mover_mark == evaluator
      return children.any? { |child| child.winning_node?(evaluator) }
    else
      return children.all? { |child| child.winning_node?(evaluator) }
    end

  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    possible_moves = []
    @board.rows.each.with_index do |row, i|
      row.each.with_index do |col, j|
        pos = [i, j]
        if @board.empty?(pos)
          new_board = @board.dup
          new_board[pos] = @next_mover_mark
          next_mark = @next_mover_mark == :x ? :o : :x
          prev_move = pos
          new_node = TicTacToeNode.new(new_board, next_mark, prev_move)
          possible_moves << new_node
        end
      end
    end
    possible_moves
  end
end
