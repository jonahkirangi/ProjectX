var projectXcontrollers = angular.module('projectXcontrollers', []);

projectXcontrollers.controller('ProjectXCtrl', function($scope){
  $scope.test = 'Data binding is working';
  $scope.broken = 15;
  });
