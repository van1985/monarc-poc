'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('JobsCtrl', function (JobsSrvApi, $scope) {

  	$scope.dropdownItm='';
  	$scope.searchText='';
  	$scope.search = function(){
  		JobsSrvApi.getData($scope.dropdownItm, $scope.searchText).then(function(response){
  		console.log(response);
  		$scope.jobs=response.jobs;
  	});
  	};

  	$scope.search();
    
  	

  });
