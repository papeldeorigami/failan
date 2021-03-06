'use strict';

angular.module('failanApp')
      .controller('MainCtrl', function ($scope, $location, $log, Restangular) {
        Restangular.setBaseUrl('http://localhost:2403/');
        var Case = Restangular.all('cases');
        
        $scope.cases = Case.getList().$object;
          
        $scope.changeView = function(view){
            $location.path(view); // path not hash
        }
        
        $scope.selectCase = function(selectedCase){
            $scope.selectedCase = selectedCase;
            $log.info('selected case ' + selectedCase.casenumber);
            $scope.changeView('analysis-list');
        }
    });