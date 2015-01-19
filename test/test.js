var assert = require("assert");
var expect = require('chai').expect;
var assert = require('chai').assert;
var Item = require('../app/models/item');

//  Just a basic test to make sure mocha is set up correctly
//  To run from the test directory: mocha 
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

// May need Chai for this:
describe('User', function(){
  var user;
  beforeEach(function () {
      user = new Item();
  });  
	it('should have a User object', function(){
	  assert.typeOf(user, 'Object', 'user is an Item');
	})
  it('should have a User object with a name property', function(){
    expect(user).to.have.property('name');
  })  
  afterEach(function () {
    // No cleanup stuff to do here yet.
  });  
})


//   http://stackoverflow.com/questions/19298118/what-is-the-role-of-describe-in-mocha
//   http://chaijs.com/guide/styles/#expect