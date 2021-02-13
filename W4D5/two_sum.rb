# Brute Force
# Time Complexity: O(n^2)

def bad_two_sum?(arr, target)
  (0...arr.length).each do |i|
    (0...arr.length).each do |j|
      return true if j > i && arr[i] + arr[j] == target
    end
  end
  false
end


# Sorting
# Time Complexity: O(nlogn)

def okay_two_sum?(arr, target)
  new_arr = arr.sort
  i = 0
  j = new_arr.length-1
  while i != j
    if new_arr[i] + new_arr[j] < target
      i += 1
    elsif new_arr[i] + new_arr[j] > target
      j -= 1
    else
      return true
    end
  end
  false
end


# Hash Map
# Time Complexity: O(n + n) O(n)

def two_sum?(arr, target)
  hash = Hash.new(0)
  arr.each { |ele| hash[ele] += 1 }
  
  (0...arr.length).each do |i|
    key = target - arr[i]
    next if key == arr[i] && hash[key] == 1
    return true if hash.has_key?(key)
  end

  false
end


arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false
