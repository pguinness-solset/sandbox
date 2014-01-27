app.config(function ($routeProvider) {
  
  'use strict';

  $routeProvider
    .when('/', {
      templateUrl: 'views/graph.html',
      controller: 'GraphCtrl'
    })
    .when('/datepicker', {
      templateUrl: 'views/datepicker.html',
      controller: 'DatePickerCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
