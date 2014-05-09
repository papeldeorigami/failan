'use strict';

angular.module('failanApp')
      .controller('MainCtrl', function ($scope, $location, Restangular) {
        Restangular.setBaseUrl('http://localhost:2403/');
        var Case = Restangular.all('cases');
        
//        $scope.cases = [{casenumber: "230003777307", product: "Injetor CRIN", customer: "MWM", status: "Finalizado"},
//            {casenumber: "230003777308", product: "Bomba CP", customer: "FPT", status: "Pendente"},
//            {casenumber: "230003777309", product: "DNOX 2.1", customer: "CES", status: "Pendente"},
//            {casenumber: "230003777310", product: "Injetor CRI", customer: "Cummins", status: "Iniciado"}];
        $scope.cases = Case.getList().$object;
          
        $scope.changeView = function(view){
            $location.path(view); // path not hash
        }          
    });