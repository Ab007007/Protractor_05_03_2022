describe('Protractor Demo App', function() {
  
  beforeEach(function() {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get('https://www.flipkart.com/');
    browser.sleep(28000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
  })

  
  // it('Handling Dynamic Elements', function() {
  //   var expectedConditions = protractor.ExpectedConditions;
  //   browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
  //   element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
  
  // });

  // it('Actions Demo', function() {
  //   var expectedConditions = protractor.ExpectedConditions;
  //   browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
  //   element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
  
  //   browser.actions().mouseMove(element(by.xpath("//div[text()='More']"))).perform();
  //   browser.wait(expectedConditions.visibilityOf(element(by.xpath("//div[div[text()='More']]/following-sibling::div//a/div"))));
  //   element.all(by.xpath("//div[div[text()='More']]/following-sibling::div//a/div")).getText().then(function(texts){

  //     texts.forEach(element => {
  //       console.log(element);
  //     });
  //   })


  // });


  it(' Drag and drop demo', function() {
    browser.get('https://jqueryui.com/droppable/');
    var element1 = element(by.id('draggable'));
    var element2 = element(by.id('droppable'));
    browser.actions().dragAndDrop(element1, element2).perform();
    element(by.id('droppable')).getText().then(function(text){
      console.log(`After draga and drop text is ${text}`);
    });
  })
  
});
