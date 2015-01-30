// e2e/items-test.js
//  First make sure Selenium web driver is started:  webdriver-manager start
// To run this test, go to the TaskList2D/test/e2e folder and then run: protractor conf.js 

var helpers = require('../test-helper');
var expect = helpers.expect;
var ItemsPage = require('./pages/items-page');

describe('creating items', function() {
  beforeEach(function() {
    // this creates a test "page" with just the elements we want to test.
    this.page = new ItemsPage();
    this.page.get();
  });

  it('should create a new item', function() {
    // Test below is only useful when starting with a clean DB:
    //expect(this.page.firstItem).to.be.undefined;

    // Nice example of seeing if a popup comes up:
    //expect(this.page.itemCreateForm.isDisplayed()).to.eventually.be.true;

    this.page.itemCreateNameField.sendKeys('Tester Adding');
    this.page.itemCreateSubmit.click();
    expect(this.page.lastItem.getText()).to.eventually.contain('Tester Adding');
  });

  it('should remove the new item', function() {
    // Still contains the added row, and contains a remove button
    // Not sure if we have to do eventually on this next one, or if it always begins as true
    expect(this.page.lastItem.getText()).to.eventually.contain('Tester Adding');
    expect(this.page.lastCol.getText()).to.eventually.contain('X');
    expect(this.page.lastCol.click());
  });  
  it('should not find the new item', function() {
    // And after deletion, no longer contains the new item
    expect(this.page.lastItem.getText()).to.eventually.not.contain('Tester Adding');
  });    
});



// UI testing:  need Karma, AngularMocks, Sinon, maybe Protractor and Chai as Promised
// http://angular.github.io/protractor/#/tutorial
// npm install protractor 
// npm install -g protractor     May have to be run on every machine
// protractor --version
// webdriver-manager start
// webdriver-manager update
// Status of Selenium web driver:  http://localhost:4444/wd/hub
// To run UI tests:  protractor conf.js
// Angular testing:   https://quickleft.com/blog/angularjs-unit-testing-for-real-though/     *****
//   http://chaijs.com/api/bdd/