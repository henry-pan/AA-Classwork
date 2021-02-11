require_relative "card"

class Deck

  attr_reader :cards

  def initialize
    @cards = []
    ["Spade", "Club", "Diamond", "Heart"].each do |suit|
      (1..13).each do |value|
        @cards << Card.new(suit, value)
      end
    end
  end

end