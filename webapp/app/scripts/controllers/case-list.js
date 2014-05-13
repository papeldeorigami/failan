'use strict';

angular.module('failanApp')
  .controller('CaseListCtrl', function ($scope, $location, $log, CaseService) {
        $scope.cases = CaseService.listAll();
      
        $scope.changeView = function(view){
            $location.path(view); // path not hash
        }
        
        $scope.selectCase = function(selectedCase){
            $scope.selectedCase = selectedCase;
            $log.info('selected case ' + selectedCase.casenumber);
            $scope.changeView('/cases/' + selectedCase.id);
        }
    });