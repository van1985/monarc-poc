'use strict';

angular.module('monarcPocApp').service('OrdersSrvApi', function($http, $q) {

  var service = {};

  service.getData = function(filter,text) {
    var deferred = $q.defer(),
        parameters='';
    if (filter!==''){
      parameters='?'+filter+'='+text;
    }

    $http({
      method: 'GET',
      //url: './scripts/orders/services/orders.json',
      url: 'http://localhost/omt-web/api/orders'+parameters
    })
    .success(
      function(response) {
        deferred.resolve(response);
      })
    .error(
      function(response) {
        deferred.reject(response.errorMessage);
      });

    return deferred.promise;
  };


  return service;

});