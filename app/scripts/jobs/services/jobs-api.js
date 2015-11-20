'use strict';

angular.module('monarcPocApp').service('JobsSrvApi', function($http, $q) {

  var service = {};

  service.getData = function(filter,text) {
    var deferred = $q.defer(),
        parameters='';
    if (filter!==''){
      parameters='?'+filter+'='+text;
    }

    $http({
      method: 'GET',
      //url: './scripts/jobs/services/jobs.json'
      url: 'http://localhost/omt-web/api/jobs'+parameters
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