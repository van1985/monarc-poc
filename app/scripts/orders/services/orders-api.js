'use strict';

angular.module('monarcPocApp').service('OrdersSrvApi', function($http, $q) {

  var service = {};

  service.getData = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: './scripts/orders/services/orders.json',
      //url: 'http://localhost/omt-web/api/orders'
    })
    .success(
      function(response) {
        deferred.resolve(response);
      })
    .error(
      function(response) {
        deferred.reject(response.responseStatus.errorMessage);
      });

    return deferred.promise;
  };


  return service;

});