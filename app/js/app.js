'use strict';

var projectXapp = angular.module('projectXapp', [
  'ngRoute',
  'ui.bootstrap',
  'projectXcontrollers'
]);

projectXapp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'JobListCtrl'
      })
      .when('/addjob', {
        templateUrl: 'pages/addjob.html',
        controller: 'JobListCtrl'
      })
      .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'JobListCtrl'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'JobListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }
]);
