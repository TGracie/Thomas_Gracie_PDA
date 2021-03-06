var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  })

  it('should add 1 to 4 and get 5', function(){
    let first = calculator.add(1);
    calculator.operatorClick('=')
    let sec = calculator.add(4);
    calculator.operatorClick('=')
    // console.log(calculator.runningTotal);
    assert.equal(calculator.runningTotal, 5);
  });

  it('should subract 4 from 7 and get 3', function(){
    let first = calculator.add(7);
    calculator.operatorClick('=')
    let sec = calculator.subtract(4);
    calculator.operatorClick('=')
    // console.log(calculator.runningTotal);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should multiply 3 by 5 and get 15', function(){
    let sum = calculator.add(3);
    calculator.operatorClick('=');
    let mul = calculator.multiply(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 15);
  });

  it('should divide 21 by 7 and get 3', function(){
    let sum = calculator.add(21);
    calculator.operatorClick('=');
    let mul = calculator.divide(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 3);
  });

  it('should concatenate multiple number button clicks', function(){
    let one = calculator.numberClick(1);
    let two = calculator.numberClick(2);

    assert.equal(calculator.runningTotal, 12);
  });

  it('should chain multiple operations together', function(){
    let five = calculator.numberClick(5);
    let add = calculator.operatorClick('+');
    let four = calculator.numberClick(4);
    let equals = calculator.operatorClick('=');

    assert.equal(calculator.runningTotal, 9);
  });

  it('should clear the running total without affecting the calculation', function(){
    let five = calculator.numberClick(5);
    let add = calculator.operatorClick('+');
    let four = calculator.numberClick(4);
    let clr = calculator.clearClick();
    let plus = calculator.operatorClick('+');
    let one = calculator.numberClick(1);
    let equals = calculator.operatorClick('=');

    assert.equal(calculator.previousTotal, 6)
  });

});
