'use strict';

angular.module('failanApp')
  .controller('CaseListCtrl', function ($scope, CaseService) {
        $scope.cases = CaseService.listAll();      
    });