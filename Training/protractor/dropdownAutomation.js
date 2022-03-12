// spec.js
describe('Protractor Demo App', function() {
  
  function add(a, b, operator='+') {
    element(by.model('first')).sendKeys(a);
    element(by.model('operator')).element(by.xpath("//option[text()='" + operator +"']")).click();
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
    add(5,5, '-')
    add(20,30, '*')
    add(5,5, '/')
    add(15,5, '%')
    add(5,5, '*')

    //printing total number of rows
    let rowCount =0
    element.all(by.repeater('result in memory')).count().then(function(totalRows){
      rowCount = totalRows
      console.log('Total number of rows is '  + totalRows);
    });

    element.all(by.repeater('result in memory')).each(function(ele){
      ele.getText().then(function(date){
          console.log(`Time using each function : ${date}`);
        })
  })



  });
});
