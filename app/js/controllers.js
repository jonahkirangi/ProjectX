'use strict';

var projectXcontrollers = angular.module('projectXcontrollers', []);

projectXcontrollers.controller('JobListCtrl', function($scope){
    $scope.jobs = [
      {
        id: 0,
        job_title: 'Database Analyst',
        company_name: 'Amazon',
        location: 'Seattle',
        date_applied: 1288323623006
      },
      {
        id: 1,
        job_title: 'Front End Dev',
        company_name: 'Redfin',
        location: 'Seattle',
        date_applied: 'May 1, 2014'
      },
      {
        id: 2,
        job_title: 'Back End Dev',
        company_name: 'Rover',
        location: 'Seattle',
        date_applied: 'June 15, 2014'
      },
      {
        id: 3,
        job_title: 'Full Stack Dev',
        company_name: 'Wet Paint',
        location: 'Seattle',
        date_applied: 'June 8, 2014'
      },
      {
        id: 4,
        job_title: 'Design Wizard',
        company_name: 'Socrata',
        location: 'Seattle',
        date_applied: 'April 2, 2014'
      }
    ];
  });
