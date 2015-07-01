// public/js/controllers/MainCtrl.js
app.controller('MainController', function($scope) {

    $scope.tagline = 'In Main controller';   

});


//  EXAMPLE OF COMMUNICATING BETWEEN CONTROLLERS USING SERVICES

app.value ('schedule', [
  {id: 1, name: "Astronomy"},
  {id: 2, name: "Compiler Design"},
  {id: 3, name: "Econ 101"}
]);

app.value ('summaryText', '');

app.constant ('catalog', [
  {id: 1, name: "Astronomy"},
  {id: 2, name: "Compiler Design"},
  {id: 3, name: "Econ 101"},
  {id: 4, name: "The Javascript Programming Language"}
]);

app.factory('registration', function (schedule) {
  return {
    registerCourse: function (course) {
      schedule.push({id: 10, name: course});

    }
  }
});

app.factory('notifier', function () {
  return {
    notifyCourseRegistration: function (course) {
      console.log ('You have been registered for:' + course)
      
    }
  }
});

app.factory('summarizer', function (summaryText, schedule) {
  return {
    setDetails: function () {
      summaryText = 'You are signed up for ' + schedule.length + ' courses starting with: ' + schedule[0].name;
      
    }
  }
});

app.controller('catalogController', function ($scope, registration, notifier, catalog, summarizer) {
  $scope.registerCourse = function (course) {
    registration.registerCourse(course);
    notifier.notifyCourseRegistration(course);
    summarizer.setDetails();
  }
  $scope.catalog = catalog;
});

app.controller('scheduleController', function($scope, schedule) {
  $scope.schedule = schedule;
});

app.controller('summaryController', function($scope, summaryText) {
  $scope.summary = summaryText;
});