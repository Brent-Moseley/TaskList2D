// app/models/item.js
// grab the mongoose module
var mongoose = require('mongoose');
console.log (' Connecting....');   // Make sure database is created and 
                                  // mongo db is running in a terminal: mongod
mongoose.connect('mongodb://localhost/sample-dev');

// define our item model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Item', {
    name : {type : String, default: ''}
    },
    'testData');    // testData is the collection name
    // Doc on creating a DB and collection:
    // http://docs.mongodb.org/manual/tutorial/getting-started/