'use strict';

angular
  .module('failanApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cases', {templateUrl: 'views/case-list.html', controller: 'CaseListCtrl'})
      .when('/cases/:caseId', {templateUrl: 'views/case-detail.html', controller: 'CaseDetailCtrl'})
      .otherwise({
        redirectTo: '/cases'
      });
  });
