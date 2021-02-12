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

  describe "#shuffle!" do
    it "should shuffle the deck" do
      original = deck.cards.dup
      expect(deck.cards).to eq(original)
      deck.shuffle!
      expect(deck.cards).not_to eq(original)
    end
  end

  describe "#deal" do
    it "should return a card from the top of the deck" do
      dealt = deck.deal
      expect(dealt.suit).to eq("Heart")
      expect(dealt.value).to eq(13)
    end
    it "should remove the dealt card from the deck" do
      deck.deal
      expect(deck.cards.length).to eq(51)
    end
  end

end