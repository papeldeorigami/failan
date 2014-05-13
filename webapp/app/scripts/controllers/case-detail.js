'use strict';

angular.module('failanApp')
  .controller('CaseDetailCtrl', function ($scope, $location, $log, $routeParams, CaseService) {
        var caseId = $routeParams.caseId;
        $scope.selectedCase = CaseService.getOne(caseId);

        $scope.changeView = function(view){
            $location.path(view); // path not hash
        }        
    });