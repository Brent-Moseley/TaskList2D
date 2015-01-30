// Run this file from the test folder:   mocha test.js

var assert = require("assert");
var expect = require('chai').expect;
var assert = require('chai').assert;
var Item = require('../app/models/item');

//  Just a basic test to make sure mocha is set up correctly
//  To run from the test directory: mocha 
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the Array value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

// Test the model:
// Need Chai for this:
describe('User', function(){
  var user;
  var notes;
  beforeEach(function () {
      user = new Item();
      user.notes.push({text : 'Test 1'});   // Temp added note
      notes = user.notes[0];
  });  
	it('should have a User object', function(){
	  assert.typeOf(user, 'Object', 'user is an Item');
	})
  it('should have a User object with a name property', function(){
    expect(user).to.have.property('name');
  })  
  it('should have a User object with a size property', function(){
    expect(user).to.have.property('size');
  }) 
  it('should have a User object with a status property', function(){
    expect(user).to.have.property('status');
  })    
  it('should have a User object with a notes property', function(){
    expect(user).to.have.property('notes');
  })    
  it('should have a User object with notes that has a text property', function(){
    expect(notes).to.have.property('text');
  })    
  afterEach(function () {
    // No cleanup stuff to do here yet.
  });  
})


//   http://stackoverflow.com/questions/19298118/what-is-the-role-of-describe-in-mocha
//   http://chaijs.com/guide/styles/#expect

//  New development mindset.  Mindset is key for our kind of work:
//    Think and imagine more of what I want to do, imagine, create, do.  
//    Visualize awesome past accomplishments and creations, play with it, 
//    then start on something new!  Try to get stuff completed.

// Create
// make
// craft
// produce
// build
// invent
// design
// imagine
// conceive
// innovate
// start
// get going
// update
// renew
// remodel
// refresh
// solve
// software detective
// kung fu engineer
// fix
// brilliant
// intelligent
// clever
// organized
// absorb
// understanding
// attitude
// leadership

