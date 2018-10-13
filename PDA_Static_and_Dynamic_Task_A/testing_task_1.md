### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb') # no path (though should be fine here)
class CardGame
## nothing being initialized so what do you call the method on? All need to be converted to class methods with self.

## All methods missing self to make them class methods

  def checkforAce(card)
    # poor method syntax, should be snake case with no caps

    if card.value = 1 # need double == to assert whether it is equal
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # should be def not dif here, also missing "," between arguments
    if card1.value > card2.value
      return card.name # which card? Also not a valid method to call needs either suit or value
    else
      card2 # anything more specific about it or just the whole card?
    end
  end


  # this entire method is outside of the class
  def self.cards_total(cards)
    total # not given a starting value
    for card in cards
      total += card.value
      return "You have a total of" + total # should probably have a space at the end of the string to make the final result read better
    end
  end

end


```
