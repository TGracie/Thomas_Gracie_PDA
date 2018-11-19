var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have working number buttons two', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22')
  });

  it('should update the display with the result of the operation', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();

    add = element(by.css('#operator_add'))
    element(by.css('#operator_add')).click();

    running_total_two = element(by.css('#running_total'))
    element(by.css('#number2')).click();

    add = element(by.css('#operator_equals'))
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should output as expected for a range of numbers first', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();

    subtract = element(by.css('#operator_subtract'))
    element(by.css('#operator_subtract')).click();

    running_total_two = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('-3');
  });

  it('should output as expected for a range of numbers second', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    divide = element(by.css('#operator_divide'))
    element(by.css('#operator_divide')).click();
    running_total_two = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('0.4');
  });

  it('should output as expected for a range of numbers third', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    running_total1 = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    running_total2 = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    running_total3 = element(by.css('#running_total'))
    element(by.css('#number9')).click();

    multiply = element(by.css('#operator_multiply'))
    element(by.css('#operator_multiply')).click();
    running_total_two = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('49995');
  });

  it('should return NAN when /0 is used', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    divide = element(by.css('#operator_divide'))
    element(by.css('#operator_divide')).click();
    running_total_two = element(by.css('#running_total'))
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('NaN');
  });

});
