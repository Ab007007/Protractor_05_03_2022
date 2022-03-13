describe('Protractor Demo App', function() {
  
  beforeEach(function() {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    
  })

  it('Handling Alerts Demo', function(){
    browser.get("http://formy-project.herokuapp.com/switch-window");
    browser.sleep(8000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    element(by.id('alert-button')).click();

    browser.switchTo().alert().getText().then(function(textonalert){
      browser.sleep(3000).then(function(){
        console.log("Text displayed on Alert" + textonalert);
      })
    })
    browser.switchTo().alert().accept();

  })
  
});
