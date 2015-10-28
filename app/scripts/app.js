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
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/main', {
        templateUrl: 'scripts/main/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/form', {
        templateUrl: 'scripts/form/views/form.html',
        controller: 'formCtrl',
        controllerAs: 'form'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
