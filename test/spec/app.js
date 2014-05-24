'use strict';

describe('helloAngularAppTest', function() {
  beforeEach(module('helloAngularApp'));
  describe('FrameworkDataSourceTest', function() {
    var ds;
    beforeEach(function() {
      inject(function(frameworksDataSource) {
        ds = frameworksDataSource;
      });
    });
    it ('service test', function() {
      var data = null;
      data = ds();
      expect(data).toBeNull();
    });
  });
});
