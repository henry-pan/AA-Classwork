class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    key_hash = key.hash
    if @count < num_buckets && !self.include?(key)
      @store[key_hash % num_buckets] << key
      @count += 1
    elsif @count >= num_buckets && !self.include?(key)
      resize!
      @store[key_hash % num_buckets] << key
      @count += 1
    end
  end

  def include?(key)
    key_hash = key.hash
    return @store[key_hash % num_buckets].include?(key)
  end

  def remove(key)
    key_hash = key.hash
    if self.include?(key)
      @store[key_hash % num_buckets].delete(key)
      @count -= 1
    end

  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp = Array.new(num_buckets * 2) { Array.new }
    @store.each do |ele|
      ele.each { |num| temp[num % (num_buckets * 2)] << num}
    end
    @store = temp
  end
end
