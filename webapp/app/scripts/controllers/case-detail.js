'use strict';

angular.module('failanApp')
  .controller('CaseDetailCtrl', function ($scope, $routeParams, CaseService) {
        var caseId = $routeParams.caseId;
        $scope.selectedCase = CaseService.getOne(caseId);
    });