// public/js/controllers/ItemCtrl.js
app.controller('ItemController', function($scope, itemService) {

  $scope.tagline = 'Here are your items:';

  $scope.getAll = function() {
    itemService.get()
      .then(function(data) {
          // promise fulfilled
          if (data) $scope.items = data;
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

  $scope.getAll();  // Show items when viewing first time

});