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

    @game = CardGame.new(@ace, @ten, @nine)
  end

  def test_check_for_ace
    # binding.pry
    var = @game.check_for_ace(@ace)
    assert_equal(true, var)
  end

  def test_highest_card
    # binding.pry
    assert_equal(10, @game.highest_card)
  end

end ## class end
