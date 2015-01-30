// test/e2e/pages/items-page.js

var helpers = require('../../test-helper');

function ItemsPage() {    // Simulate a class
  this.get = function() {  // Class member get
    browser.get(helpers.rootUrl + '/items');
  }

  this.itemRepeater = by.repeater('item in items'); // Find element by ng-repeat
  this.firstItem = element(this.itemRepeater.row(0));  // get the first row in the repeater
  this.lastItem = element.all(this.itemRepeater).last();  // get all elements in repeater, then find last
  this.lastCol = element.all(this.itemRepeater).last().$$('td').last(); // within last row, find all 'td's and get last of those 
  this.itemCreateSubmit = element(by.css('.button'));  // get element by css class 'button'
  this.itemCreateNameField = element(by.model('newOne'));  // get element by ng-model
  //this.itemCreateSubmit = this.widgetCreateForm.element(by.buttonText('Create');
}

module.exports = ItemsPage;