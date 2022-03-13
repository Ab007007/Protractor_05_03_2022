describe('Demo on Frames', function() {
  
  beforeEach(function() {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);

  })

  it(' Drag and drop demo', function() {
    browser.get('https://jqueryui.com/droppable/');
    browser.switchTo().frame(element(by.css("iframe[src*='default']")).getWebElement());
    var element1 = element(by.id('draggable'));
    var element2 = element(by.id('droppable'));
    browser.actions().dragAndDrop(element1, element2).perform();
    element(by.id('droppable')).getText().then(function(text){
      console.log(`After draga and drop text is ${text}`);
    });

    browser.switchTo().defaultContent();
    element(by.linkText('Draggable')).click().then(function(){
      browser.sleep(4000)
    });
  })
  
});
