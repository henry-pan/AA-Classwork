require "tdd"

describe Array do 

  describe "#my_uniq" do 
    it "should return a new array which has no duplicated elements" do 
      expect([1,2,1,3,3].my_uniq).to eq([1,2,3])
    end
  end

  describe "#two_sum" do 
    it "should return all pairs of positions where the sum is zero" do 
      expect([-1,0,2,-2,1].two_sum).to eq([[0,4],[2,3]])
    end

    it "should return pairs with smaller index before bigger index" do 
      expect([-1,0,2,-2,1].two_sum).to_not eq([[4,0],[3,2]])
    end

    it "return [] if no pairs meet the requirements" do 
      expect([-1,0,2].two_sum).to be_empty
    end

  end
end

describe "my_transpose" do 
  let(:arr) {[[0,1,2],[3,4,5],[6,7,8]]}

  it "raise an error if the arg is not a 2D array" do 
    expect{my_transpose([1,2,3])}.to raise_error("not a 2d-array")
  end

  it "should return a transpose 2d array" do 
    expect(my_transpose(arr)).to eq([[0,3,6],[1,4,7],[2,5,8]])
  end

end

describe "stock_picker" do 
  it "raise an error if the arg is not an array" do 
    expect{stock_picker(1)}.to raise_error("not an array")
  end

  it "should return nil if the arg is empty" do 
    expect(stock_picker([])).to be_nil 
  end

  it "should return most profitable pair" do 
    expect(stock_picker([1,10,20,2,1000])).to eq([0,4])
  end

  it "buy day must be before sell day" do 
    expect(stock_picker([1,10,20,2,1000])).to_not eq([4,0])
  end

  it "should return [] if there is no profitable pair" do 
    expect(stock_picker([1000,500,10,1])).to be_empty
  end 

end

describe Towers do

  subject(:tower) { Towers.new }

  describe "#initialize" do
    it "should get piles" do
      expect(tower.piles).to eq([[4,3,2,1],[],[]])
    end
  end

  describe "#won?" do
    it "should return true if the length of the second element is 4" do
      # @piles = [[],[4,3,2,1],[]]
      tower.piles = [[],[4,3,2,1],[]]
      expect(tower.won?).to be true
    end
  end

  describe "#move" do
    it "should do nothing if attempting to put a larger disc on top of a smaller disc" do
      tower.piles = [[4,3,2],[1],[]]
      tower.move(0,1)
      expect(tower.piles).to eq([[4,3,2],[1],[]])
    end

    it "should move a disc from the start position to end position" do
      tower.piles = [[4,3],[1],[2]]
      tower.move(1,2)
      expect(tower.piles).to eq ([[4,3],[],[2,1]])
    end

  end


end