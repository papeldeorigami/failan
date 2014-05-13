'use strict';

describe('Controller: CaseDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('failanApp'));

  var CaseDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaseDetailCtrl = $controller('CaseDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
