# Windowed Max Range: Phase I
# Time Complexity: O(n^2)

def naive_windowed_max_range(arr, w)
  current_max_range = -99999

  (0..arr.length - 1 - (w - 1)).each do |i|
    window = arr[i..i + (w - 1)]
    min = window.min
    max = window.max

    current_max_range = max - min if current_max_range < max - min
  end
  current_max_range
end

p naive_windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p naive_windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p naive_windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p naive_windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8
