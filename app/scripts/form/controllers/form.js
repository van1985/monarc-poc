'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('FormCtrl', function (FormSrvApi, $scope) {

  	    $scope.saveOrder = function(){
  	    console.log($scope.model);
    	FormSrvApi.saveOrder($scope.model).then(function(response){
    		$location.path('/orders');
    	});
    };

  });
