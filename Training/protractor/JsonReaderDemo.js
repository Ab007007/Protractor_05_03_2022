var Objects = require("./data/Object.json")
describe('Protractor Demo App', function() {
  
  it('Basic Calculator Operations', function() {
    browser.get(Objects.url);
    browser.sleep(Objects.stdWaitTime).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    element(by.model(Objects.locators.homepage.ng_first_number)).sendKeys(123);
    element(by.model(Objects.locators.homepage.ng_second_number)).sendKeys(456);

    element(by.id(Objects.locators.homepage.id_go_button)).click();
 
    element(by.css("h2[class='ng-binding']")).getText().then(function(result){

      console.log(`Result : ${result}`);
    })
    //using jasmine framework we are perfoming validations
    expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual('579');
    
  });
});
