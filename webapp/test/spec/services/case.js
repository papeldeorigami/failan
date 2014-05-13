'use strict';

describe('Service: Case', function () {

  // load the service's module
  beforeEach(module('failanApp'));

  // instantiate service
  var Case;
  beforeEach(inject(function (_Case_) {
    Case = _Case_;
  }));

  it('should do something', function () {
    expect(!!Case).toBe(true);
  });

});
