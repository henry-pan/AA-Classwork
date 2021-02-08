require_relative './PolyTreeNode/lib/00_tree_node.rb'

class KnightPathFinder

  def self.valid_moves(pos)
    moves = []
    x, y = pos[0], pos[1]
    moves << [x-2,y-1]
    moves << [x-2,y+1]
    moves << [x-1,y-2]
    moves << [x-1,y+2]
    moves << [x+1,y-2]
    moves << [x+1,y+2]
    moves << [x+2,y-1]
    moves << [x+2,y+1]
    moves.select { |move| move[0] < 8 && move[1] < 8 && move[0] >= 0 && move[1] >= 0}
  end

  def initialize(starting_pos)
    @starting_pos = starting_pos
    @root_node = PolyTreeNode.new(@starting_pos)
    @considered_positions = [@starting_pos]
    build_move_tree
  end

  def build_move_tree
    queue = [@root_node]

    until queue.empty?
      node = queue.pop
      children = new_move_positions(node.value)
      children.each do |child|
        child_node = PolyTreeNode.new(child)
        node.add_child(child_node)
        queue.unshift(child_node)
      end
    end

  end

  def new_move_positions(pos)
    new_positions = [] + KnightPathFinder.valid_moves(pos)
    new_positions.select! { |c_pos| !@considered_positions.include?(c_pos) }
    @considered_positions.concat(new_positions)
    new_positions
  end

  def find_path(end_pos)
    @root_node.bfs(end_pos)
  end

  def trace_path_back(end_node)
    positions = []
    node = end_node
    while node.parent != nil
      positions.unshift(node.value)
      node = node.parent
    end
    positions.unshift(@root_node.value)
    positions
  end

end

k = KnightPathFinder.new([0,0])
p k.trace_path_back(k.find_path([6,2])) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]