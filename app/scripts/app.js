'use strict';

angular
  .module('helloAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
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
  });
