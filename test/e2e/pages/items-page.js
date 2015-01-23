// test/e2e/pages/widgets-page.js

var helpers = require('../../test-helper');

function ItemsPage() {
  this.get = function() {
    browser.get(helpers.rootUrl + '/items');
  }

  this.itemRepeater = by.repeater('item in items');
  this.firstItem = element(this.itemRepeater.row(0));
  this.lastItem = element.all(this.itemRepeater).last();
  this.lastCol = element.all(this.itemRepeater).last().$$('td').last();
  this.itemCreateSubmit = element(by.css('.button'));
  this.itemCreateNameField = element(by.model('newOne'));
  //this.itemCreateSubmit = this.widgetCreateForm.element(by.buttonText('Create');
}

module.exports = ItemsPage;