require "deck"

describe Deck do

  subject(:deck) { Deck.new }

  describe "#initialize" do
    it "length of the deck should be 52" do
      expect(deck.cards.length).to eq(52)
    end

    it "should make cards correctly" do
      expect(deck.cards[0].suit).to eq("Spade")
      expect(deck.cards[0].value).to eq(1)
    end
  end

end