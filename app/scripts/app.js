'use strict';

/**
 * @ngdoc overview
 * @name monarcPocApp
 * @description
 * # monarcPocApp
 *
 * Main module of the application.
 */
angular
  .module('monarcPocApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'scripts/login/views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/jobs', {
        templateUrl: 'scripts/jobs/views/jobs.html',
        controller: 'JobsCtrl'
      })
      .when('/orders', {
        templateUrl: 'scripts/orders/views/orders.html',
        controller: 'OrdersCtrl'
      })
      .when('/form', {
        templateUrl: 'scripts/form/views/form.html',
        controller: 'formCtrl'
      })
      .when('/recoverpass', {
        templateUrl: 'scripts/recoverpass/views/recoverpass.html',
        controller: 'recoverPassCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
