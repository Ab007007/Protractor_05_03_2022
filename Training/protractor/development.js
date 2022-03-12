describe('Protractor Demo App', function() {
  
  it('Basic Calculator Operations', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(10000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    element(by.model('first')).sendKeys(123);
    element(by.model('second')).sendKeys(456);

    element(by.id('gobutton')).click();
 
    //using jasmine framework we are perfoming validations
    expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual('579');
    
  });


  it('Basic Calculator Operations2', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(10000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    element(by.model('first')).sendKeys(1);
    element(by.model('operator')).element(by.xpath("//option[text()='*']")).click();
    element(by.model('second')).sendKeys(456);

    element(by.id('gobutton')).click();
 
    //using jasmine framework we are perfoming validations
    expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual('456');
    
  });

  it('Basic Calculator Operations3', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(10000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    element(by.model('first')).sendKeys(123);
    element(by.model('operator')).element(by.xpath("//option[text()='/']")).click();
    element(by.model('second')).sendKeys(456);

    element(by.id('gobutton')).click();
 
    //using jasmine framework we are perfoming validations
    expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual('5792');
    
  });

  it('Basic Calculator Operations4', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(10000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    element(by.model('first')).sendKeys(123);
    element(by.model('operator')).element(by.xpath("//option[text()='%']")).click();
    element(by.model('second')).sendKeys(456);

    element(by.id('gobutton')).click();
 
    //using jasmine framework we are perfoming validations
    expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual('5792');
    
  });
});
