 // app/routes.js

 // good doc:  https://www.packtpub.com/books/content/understanding-express-routes
var Item = require('./models/item');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/items', function(req, res) {
          // use mongoose to get all items in the database
          console.log ('Request for all items');
          Item.find(function(err, items) {
            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(items); // return all items in JSON format
          });
        });

        // route to handle creating goes here (app.post)
        app.post('/api/items', function(req, res) {
          var next = new Item(req.body);
          console.log ('create new:');
          next.save(function (err) {
            if (err) { console.error(err); res.send('ERROR posting'); }
            else { console.log ('Successful add'); res.send('/ POST OK'); }
          });
        });

        // route to handle delete goes here (app.delete)
        app.delete('/api/items/:id', function(req, res) {
          console.log (' in delete');
          console.log (req.params.id.substring(4));
          // id value will come in this format: "&id=5474bd2f118b2d00008b1ab8"
          Item.findById(req.params.id.substring(4)).remove(function (err) {
            if (err) { console.error(err); res.send('Unable to Delete'); }
            else { console.log ('successful delete'); res.send('/ DELETE OK'); }
          })
        });        

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
                                                       // default route
        });

    };

