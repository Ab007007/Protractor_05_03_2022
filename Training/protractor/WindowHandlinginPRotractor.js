describe('Protractor Demo App', function() {
  
  beforeEach(function() {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    
  })

  it('Handling Alerts Demo', function(){
    browser.get("https://www.irctc.co.in/eticketing/errors.html#");
    browser.sleep(8000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
    
    element(by.linkText('Contact Us')).click();

    browser.getAllWindowHandles().then(function(windowIDs){
      console.log(`Window ids : ${windowIDs}`);
      browser.switchTo().window(windowIDs[1]);

      
      element.all(by.tagName('a')).each(function(linkEle){
        linkEle.getText().then(function(text){
          console.log(`Link on child Element : ${text}`);
        })
      });
      browser.switchTo().window(windowIDs[0]);
      element(by.linkText('click here')).click();

    })

  })
  
});
