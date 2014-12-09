// public/js/services/NerdService.js
app.factory('itemService', ['$http', function($http, $q) {

    return {
      // call to get all items
      get : function() {
        console.log ('in get');
        return $http.get('/api/items')
          .then(function(response) {
            if (typeof response.data === 'object') {
              return response.data;
            } else {
              // invalid response
              return $q.reject(response.data);
            }

            }, function(response) {
              // something went wrong
              return $q.reject(response.data);
            });
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new item
        create : function(itemData) {
          console.log ('in create');
          var data = JSON.stringify ({name: itemData});
          return $http.post('/api/items', data);
        },

        // call to DELETE an item
        delete : function(id) {
          console.log (' in service delete');
          return $http.delete('/api/items/&id=' + id);
        }
    }       

}]);
