// reference
//http://stackoverflow.com/questions/3422262/take-a-screenshot-with-selenium-webdriver
//https://code.google.com/p/selenium/wiki/WebDriverJs#Writing_Tests
//http://stackoverflow.com/questions/22938045/selenium-webdriver-node-js-take-screenshot-and-save-test-results

var fs = require('fs');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

driver.get('http://www.google.com/ncr');

driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
// wait
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.takeScreenshot().then(function(data){
  var base64Data = data.replace(/^dta:image\/png;base64,/,"");
  fs.writeFile("out.png", base64Data, 'base64', function(err){
    if(err) console.log(err);
  });
});

