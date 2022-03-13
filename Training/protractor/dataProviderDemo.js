var Objects = require("./data/Object.json")
var using = require('jasmine-data-provider');


describe('Protractor Demo App', function() {
  using([{a: 12,b : 12,c : 24},{a: 120,b : 120,c : 240},{a: 2,b : 2,c : 4}],function(data){
    it('Basic Calculator Operations', function() {
      browser.get(Objects.url);
      browser.sleep(Objects.stdWaitTime).then(function(){
        console.log('Intentional Sleeeppppp');
      })
      element(by.model(Objects.locators.homepage.ng_first_number)).sendKeys(data.a);
      element(by.model(Objects.locators.homepage.ng_second_number)).sendKeys(data.b);
  
      element(by.id(Objects.locators.homepage.id_go_button)).click();
   
      element(by.css("h2[class='ng-binding']")).getText().then(function(result){
  
        console.log(`Result : ${result}`);
      })
      //using jasmine framework we are perfoming validations
      expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual(data.c.toString());
      
    });
  })
  
 
});
