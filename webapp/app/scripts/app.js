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
      .when('/select-case', {templateUrl: 'views/select-case.html', controller: 'MainCtrl'})
      .when('/analysis-list', {templateUrl: 'views/analysis-list.html', controller: 'MainCtrl'})
      .otherwise({
        redirectTo: '/analysis-list'
      });
  });
