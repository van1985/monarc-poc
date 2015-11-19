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
    
    $scope.dropdownItm='';
  	$scope.searchText='';
  	$scope.search = function(){
  		OrdersSrvApi.getData($scope.dropdownItm, $scope.searchText).then(function(response){
			console.log(response);
			$scope.orders=response.orders;
  		});
  	};

  	$scope.search();

  	

  });
