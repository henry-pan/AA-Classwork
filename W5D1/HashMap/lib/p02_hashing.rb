class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    self.join("").to_i.hash
  end
end

class String
  def hash
    new_str = self.dup
    new_str.each_char.with_index do |char, i|
      new_str[i] = char.ord.to_s
    end
    new_str.to_i.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    new_keys = self.keys.sort
    new_keys.to_s.hash
  end
end
