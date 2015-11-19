'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('HeaderCtrl', function ($scope, LoginSrvApi,UserSrv, $location) {
    
    $scope.error =false;
    $scope.logout = function(){
    	LoginSrvApi.logout().then(function(response){
    		UserSrv.setUser(null);
			$location.path('/login');
    	});
    };

    //Check user is login
    if (UserSrv.getUser()===null || UserSrv.getUser() === undefined){
    	$location.path('/login');
    }

  });
