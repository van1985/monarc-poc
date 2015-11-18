'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('LoginCtrl', function ($location , $scope, LoginSrvApi) {
    
    $scope.error =false;
    $scope.login = function(){
    	LoginSrvApi.login($scope.username,$scope.password).then(function(response){
			if (response.uuid !== null){
				$location.path('/main');
			}
			else
			{
				$scope.error =true;
			}
    	});
    };

  });
