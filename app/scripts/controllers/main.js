'use strict';

angular.module('helloAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.world = 'Angular';
    $scope.addFramework = function(text) {
      $scope.frameworks.push($scope.world);
      $scope.world = '';
    };
  })
  .controller('DescCtrl', function($scope, $routeParams) {
    $scope.framework = {
      name: $routeParams.name
    };
  });
