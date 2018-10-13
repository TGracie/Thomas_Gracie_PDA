### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('./card.rb')

@ace = Card.new("spade", 1)
@ten = Card.new("diamon", 10)
@nine = Card.new("diamon", 9)

class CardGame

  attr_reader :card1, :card2, :card3

    def self.check_for_ace(card)
        if card.value == 1
          return true
        else
          return false
        end
    end

    def self.highest_card(card1, card2)
      if card1.value > card2.value
        return card1.value
      else
        card2.value
      end
    end

    def self.cards_total(cards)
      total = 0
      for card in cards
        total += card.value
      end
      return "You have a total of " + "#{total}"
    end
end
