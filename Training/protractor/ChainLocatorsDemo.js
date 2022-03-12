// spec.js
describe('Protractor Demo App', function() {
  
  function add(a, b) {
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();

    element(by.binding('latest')).getText().then(function(result){
      console.log(`sum of two numbers is ${result}`);
    })
  }
  it('Basic Calculator Operations', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(5000).then(function(){
      console.log('Intentional Sleeeppppp');
    })
   
    add(2,4)
    add(5,5)
    add(20,30)
    //printing total number of rows
    let rowCount =0
    element.all(by.repeater('result in memory')).count().then(function(totalRows){
      rowCount = totalRows
      console.log('Total number of rows is '  + totalRows);
    });


    //Chain locators
    //print the first row time
    element.all(by.repeater('result in memory')).first()
      .element(by.binding('result.timestamp')).getText().then(function(date){
        console.log(`Time on first row ${date}`);
      })


    //Chain locators
    //print the first row time
    element.all(by.repeater('result in memory')).get(0)
    .element(by.binding('result.timestamp')).getText().then(function(date){
      console.log(`Time on first row ${date}`);
    })
    //print the second row time
    element.all(by.repeater('result in memory')).get(1)
    .element(by.binding('result.timestamp')).getText().then(function(date){
      console.log(`Time on second row ${date}`);
    })
    //print the third row time
    element.all(by.repeater('result in memory')).get(2)
    .element(by.binding('result.timestamp')).getText().then(function(date){
      console.log(`Time on third row ${date}`);
    })


    element.all(by.repeater('result in memory')).count().then(function(totalRows){
      rowCount = totalRows
      console.log(`total iterations to be performed ${rowCount}`);
      for (let index = 0; index < rowCount; index++) {
        element.all(by.repeater('result in memory')).get(index)
        .element(by.binding('result.timestamp')).getText().then(function(date){
          console.log(`Time on index ${index} row ${date}`);
        })
      }
    });



    //prinitng table using each function
    element.all(by.repeater('result in memory')).each(function(ele){
        ele.element(by.binding('result.timestamp')).getText().then(function(date){
            console.log(`Time using each function : ${date}`);
          })
    })



    /// using row in chain locators

    element(by.repeater('result in memory').row(0)).getText().then(function(row){
      console.log(`First row content is ${row}`);
    })
   




  });
});
