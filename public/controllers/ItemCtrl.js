// public/js/controllers/ItemCtrl.js
app.controller('ItemController', function($scope, itemService) {

  $scope.tagline = 'Here are your items:';

  $scope.getAll = function() {
    itemService.get()
      .then(function(data) {
          // promise fulfilled
          if (data) {
            var rocks = _.where(data, {size: 'Rock'});
            var pebbles = _.where(data, {size: 'Pebble'});
            var sand = _.where(data, {size: 'Sand'});
            var none = _.where(data, {size: ''}); 
            var arranged = rocks.concat(pebbles, sand, none);   

            $scope.items = arranged;
            console.log ('data read:');
            console.log (data);
          }
          $scope.newOne = '';
      });
      // Add some error handling here.
  }
  
  $scope.addOne = function (newOne) {
  	console.log ('in add One');
    itemService.create (newOne)
      .then(function(data) {
        $scope.getAll();
      });
  }

  $scope.remove = function (id) {
    console.log ('removing: ' + id);
    itemService.delete (id)
      .then(function(data) {
        $scope.getAll();
      });
  }

  $scope.update = function (id, data) {
    console.log ('request to update: ' + id);
    console.log (data);
    itemService.update (id, angular.copy(data))
      .then(function(data) {
        console.log ('Update completed');
      });
  }

  $scope.getAll();  // Show items when viewing first time

});