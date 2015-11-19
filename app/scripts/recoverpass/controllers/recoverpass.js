'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('recoverPassCtrl', function ( $scope, RecoverSrvApi) {
    
    $scope.message='';
    $scope.send = function(){
    	RecoverSrvApi.recover($scope.username,$scope.email).then(function(response){
			console.log(response);
			if (response.errorMessage!==null){
				$scope.message=response.errorMessage;	
			}
			else
			{
				$scope.message = response.message;
			}
			
    	});
    };



  });
