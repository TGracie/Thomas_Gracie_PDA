require("minitest/autorun")
require("minitest/rg")
require('pry')
require_relative('./card.rb')
require_relative('./testing_task_2.rb')

class CardGameTest < MiniTest::Test

  def setup
    @ace = Card.new("spade", 1)
    @ten = Card.new("diamond", 10)
    @nine = Card.new("diamond", 9)
    @cards = [@nine, @ten, @ace]
  end

  # def test_check_for_ace(card)
  #   assert_equal(true, (CardGame.new(@ace)).check_for_ace(@ace) )
  # end

  def test_check_for_ace
    test_1 = CardGame.check_for_ace(@ace)
    assert_equal(true, test_1)
  end

  def test_highest_card
    test_2 = CardGame.highest_card(@ten, @nine)
    assert_equal(10, test_2)
  end

  def test_cards_total
    test_3 = CardGame.cards_total(@cards)
    assert_equal("You have a total of 20", test_3)
  end

end ## class end
