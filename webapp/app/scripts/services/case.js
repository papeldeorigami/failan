'use strict';

angular.module('failanApp')
  .service('CaseService', function(Restangular) {
        Restangular.setBaseUrl('http://localhost:2403/');
        
        this.listAll = function() { return Restangular.all('cases').getList().$object; };

        this.getOne = function(caseId) { return Restangular.one('cases', caseId).get().$object; };
  });
