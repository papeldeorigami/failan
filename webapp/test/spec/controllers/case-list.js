'use strict';

describe('Controller: CaseListCtrl', function () {

  // load the controller's module
  beforeEach(module('failanApp'));

  var CaseListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaseListCtrl = $controller('CaseListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
