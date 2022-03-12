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
 
    //using jasmine framework we are perfoming validations
    expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual('579');
    
  });
});
