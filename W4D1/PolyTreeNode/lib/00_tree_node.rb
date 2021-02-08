class PolyTreeNode
  
  attr_reader :parent, :children, :value

  def initialize(value)
    @parent = nil
    @children = []
    @value = value
  end
  
  def parent=(node)
    @parent.children.delete(self) if @parent != nil 
    @parent = node
    node.children << self if node != nil
  end

  def add_child(child_node)
    child_node.parent = self
  end

  def remove_child(child_node)
    raise "Node is not a child" if child_node.parent == nil
    child_node.parent = nil
  end

  def dfs(target_value)
    return self if self.value == target_value
    self.children.each do |child|
      result = child.dfs(target_value)
      return result if result != nil
    end
    nil
  end

  def bfs(target_value)
    queue = [self]
    until queue.empty?
      result = queue.pop
      if target_value == result.value
        return result
      else
        result.children.each { |child| queue.unshift(child) }
      end
    end
    nil
  end

end