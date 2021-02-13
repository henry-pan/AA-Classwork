# Phase I
# Time Complexity: O(n!)

def first_anagram?(str1, str2)
  str1.split("").permutation.include?(str2.split(""))
end

# Phase II
# Time Complexity: O(n^2) 

def second_anagram?(str1, str2)
  new_arr = str2.split("")
  str1.each_char do |char|
    i = new_arr.find_index(char)
    if !i.nil?
      new_arr.delete_at(i) 
    else
      return false
    end
  end
  new_arr.empty?
end

# Phase III
# Time Complexity: O(nlogn)

def third_anagram?(str1, str2)
  str1.split("").sort == str2.split("").sort
end

# Phase IV
# Time Complexity: O(2n) / O(n)

def fourth_anagram?(str1, str2)
  hash1 = Hash.new(0)
  str1.each_char { |ele| hash1[ele] += 1}
  str2.each_char { |ele| hash1[ele] -= 1}
  hash1.values.all?{|ele| ele == 0}
end

p fourth_anagram?("gizmo", "sally") # false
p fourth_anagram?("elvis", "lives") # true
