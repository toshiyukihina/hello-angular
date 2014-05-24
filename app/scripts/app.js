'use strict';

angular
  .module('helloAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .factory('frameworksDataSource', function($q, $timeout) {
    var frameworks = ['Backbone.js', 'Ember.js', 'Knockout.js'];
    return function() {
      return frameworks;
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/frameworks/:name', {
        templateUrl: 'views/desc.html',
        controller: 'DescCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('reverse', function() {
    return function(values) {
      return values.concat().reverse();
    };
  });
