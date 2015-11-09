'use strict';

/**
 * @ngdoc function
 * @name monarcPocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monarcPocApp
 */
angular.module('monarcPocApp')
  .controller('MainCtrl', function (JobsSrvApi, $scope) {
    
  	JobsSrvApi.getData().then(function(response){
  		console.log(response);
  		$scope.jobs=response.jobs;
  	});

  });
