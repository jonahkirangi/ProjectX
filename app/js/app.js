'use strict';

var projectXapp = angular.module('projectXapp', [
  'ngRoute',
  'projectXcontrollers'
]);

projectXapp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/job-list.html',
        controller: 'JobListCtrl'
      }).
      when('/addjob', {
        templateUrl: 'partials/add-job.html',
        controller: 'JobListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }]);
