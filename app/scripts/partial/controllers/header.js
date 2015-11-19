'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('HeaderCtrl', function ($scope, LoginSrvApi) {
    
    $scope.error =false;
    $scope.logout = function(){
    	LoginSrvApi.logout().then(function(response){
			$location.path('/login');
    	});
    };

  });
