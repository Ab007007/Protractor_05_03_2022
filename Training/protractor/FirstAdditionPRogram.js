// spec.js
describe('Protractor Demo App', function() {
  
  it('Basic Calculator Operations', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(25000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    element(by.model('first')).sendKeys(123);
    element(by.model('second')).sendKeys(456);

    element(by.id('gobutton')).click();
    browser.sleep(10000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    //expect(browser.getTitle()).toEqual('Super Calculator');
  });
});
