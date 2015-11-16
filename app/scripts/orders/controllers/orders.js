'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('OrdersCtrl', function (OrdersSrvApi, $scope) {
    
  	OrdersSrvApi.getData().then(function(response){
		console.log(response);
		$scope.orders=response.orders;
  	});

  });
