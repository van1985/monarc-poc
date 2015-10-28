'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('LoginCtrl', function ($location , $scope) {
    
    $scope.login = function(){
    	$location.path('/main');
    };
  });
