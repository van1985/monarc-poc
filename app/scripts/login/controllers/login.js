'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('LoginCtrl', function ($location , $scope, LoginSrvApi, UserSrv) {
    
    $scope.error =false;
    $scope.login = function(){
    	LoginSrvApi.login($scope.username,$scope.password).then(function(response){
			if (response.user !== null){
				UserSrv.setUser(response.user);
				$location.path('/main');
			}
			else
			{
				$scope.error =true;
			}
    	});
    };

  });
