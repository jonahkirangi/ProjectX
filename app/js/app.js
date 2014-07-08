'use strict';

var projectXapp = angular.module('projectXapp', [
  'ngRoute',
  'projectXcontrollers'
]);

projectXapp.config(['$routeProvider',
  function($routeProvider) {
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
  }]);
