
class Array 


  def my_uniq
    hash = Hash.new(0)
    self.each {|ele| hash[ele] += 1}
    hash.keys
  end

  def two_sum 
    pairs = []
    (0...self.length).each do |i|
      (i + 1...self.length).each do |j|
        pairs << [i, j] if self[i] + self[j] == 0
      end
    end
    pairs 
  end
end 

def my_transpose(arr)
  raise "not a 2d-array" unless arr.all?(Array)
  transpose_arr = Array.new(arr.length){Array.new(arr.length)}
  (0...arr.length).each do |j|
    (0...arr.length).each do |i|
      transpose_arr[i][j] = arr[j][i]
    end
  end
  transpose_arr 
end

def stock_picker(arr)
  raise "not an array" unless arr.is_a?(Array)
  return nil if arr.empty?
  best_days = []
  profit = 0
  (0...arr.length).each do |i|
    (i + 1...arr.length).each do |j|
      if arr[j] - arr[i] > profit 
        profit = arr[j] - arr[i]
        best_days = [i, j] 
      end
    end
  end
  best_days
end




