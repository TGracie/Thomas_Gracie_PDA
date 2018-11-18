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

  it('concatenate multiple number button clicks', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    running_total_two = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22');
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

  it('clear the running total without affecting the calculation', function(){
    

  });

});
