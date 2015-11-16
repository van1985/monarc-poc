'use strict';

angular.module('monarcPocApp').service('JobsSrvApi', function($http, $q) {

  var service = {};

  service.getData = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: './scripts/jobs/services/jobs.json'
      //url: 'http://localhost/omt-web/api/jobs'
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