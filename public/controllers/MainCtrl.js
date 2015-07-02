// public/js/controllers/MainCtrl.js
app.controller('MainController', function($scope) {

    $scope.tagline = 'In Main controller';   

});


//  Documentation on providers:  https://docs.angularjs.org/guide/providers


//  EXAMPLE OF COMMUNICATING BETWEEN CONTROLLERS USING SERVICES
//
//  In a more extensive example, the services and controllers would be in their own files,
//  organized in folders by feature.

// Create a very simple service to simulate the user's schedule, can be "edited"
app.value ('schedule', [
  {id: 1, name: "Astronomy"},
  {id: 2, name: "Compiler Design"},
  {id: 3, name: "Econ 101"}
]);

// Simple service to hold the summary text.
app.value ('summaryText', {text: 'None'});

// Create a constant for the list of class options, this is created during the configuration phase and does not change
app.constant ('catalog', [
  {id: 1, name: "Astronomy"},
  {id: 2, name: "Compiler Design"},
  {id: 3, name: "Econ 101"},
  {id: 4, name: "The Javascript Programming Language"}
]);

// Create a service (using the factory function) responsible for registration of courses
//  Takes in the schedule value as a dependency
app.factory('registration', function (schedule) {
  return {
    registerCourse: function (course) {
      schedule.push({id: 10, name: course});
    }
  }
});

// Create a service responsible for sending out notifications in some way. 
app.factory('notifier', function () {
  return {
    notifyCourseRegistration: function (course) {
      console.log ('You have been registered for:' + course)
    }
  }
});

// Create a service that knows how to generate the summary text, 
// takes in the summary text service and the schedule service as dependencies.
app.factory('summarizer', function (summaryText, schedule) {
  return {
    setDetails: function () {
      summaryText.text = 'You are signed up for ' + schedule.length + ' courses starting with: ' + schedule[0].name;
    }
  }
});

// The catalog controller, build the catalog section of the page as a "component"
// Note, takes in its scope, and the registration, notifier, catalog, and summarizer as dependencies.
app.controller('catalogController', function ($scope, registration, notifier, catalog, summarizer) {
  $scope.registerCourse = function (course) {
    // When the user clicks 'Add' (or enter to submit the form), add the course they entered into the
    // input box. Note the de-coupling of responsibilities and separation of concerns below. 
    // The catalog controller does not need to know any of the logic for how to actually register a course,
    // do a notification, or set the details.  The services have that responsibility.  The controller just
    // has to know what to ask for when the user wants to register a course.
    registration.registerCourse(course);   // Ask the registration service to register the course
    notifier.notifyCourseRegistration(course);  // Ask the notifier to send out a notification
    summarizer.setDetails();                    // Ask the summarizer to generate new summary text. 
  }
  $scope.catalog = catalog;   // Set a reference to the catalog array on the controller's scope.
  summarizer.setDetails();    // Create the summary details on page load
});

// The schedule controller is for the section of the page showing the user's schedule.
app.controller('scheduleController', function($scope, schedule) {
  // take in the controllers scope and the schedule service as dependencies.
  // All that is required is to set a reference to the schedule array and the HTML element will ng-repeat
  // over the array to show the schedule. 
  $scope.schedule = schedule;
});

// The summary controller is for the summary section of the page. 
app.controller('summaryController', function($scope, summaryText) {
  $scope.summary = summaryText;
});