describe('Protractor Demo App', function() {
  
  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com/');
    browser.sleep(10000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
  })

  
  it('Basic Calculator Operations', function() {
    element(by.name('q')).sendKeys("Synechron"); 
    browser.sleep(2000).then(function(){
      // element(by.xpath("(//ul[@class='G43f7e'])[1]")).getText().then(function(autoValues){
      // console.log(`Auto Suggested Values are: ${autoValues}`)
      // });

      element.all(by.xpath("//ul[@role='listbox']/li//span")).then(function(suggestions){
        suggestions.forEach(element => {
          element.getText().then(function(suggestion){
            console.log(`Suggestion : ${suggestion}`);
          });
        });
      });
    })
  });
});
