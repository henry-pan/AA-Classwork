# my_min - Phase I
# Time Complexity: O(n^2)

def my_min1(list)
  min = list[0]
  (0...list.length).each do |i|
    (0...list.length).each do |j|
      min = list[i] if list[i] < list[j] && list[i] < min
    end
  end
  min
  
end

# my_min - Phase II
# Time Complexity: O(n)

def my_min2(list)
  min = list[0]
  (1...list.length).each do |i|
    min = list[i] if list[i] < min
  end
  min
end

# largest_contiguous_subsum - Phase I
# Time Complexity: O(n^3)

def largest_contiguous_subsum1(list)
  sub_arr = []
  (0...list.length).each do |i|
    (i...list.length).each do |j|
      sub_arr << list[i..j]
    end
  end
  sub_arr.map(&:sum).max
end

# largest_contiguous_subsum - Phase II
# Time Complexity: O(n)

def largest_contiguous_subsum2(list)
  largest = list[0]
  current = 0
  
  (0...list.length).each do |i|
    current = [list[i], current + list[i]].max
    largest = [current, largest].max
  end

  largest
end


list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum2(list) # => 8