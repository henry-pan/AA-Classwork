require "card"

describe Card do

  subject(:card) { Card.new("Spade", 4) }

  describe "#initialize" do
    it "should assign a card correctly" do
      expect(card.suit).to eq("Spade")
      expect(card.value).to eq(4)
    end
  end

end