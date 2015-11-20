'use strict';

angular.module('monarcPocApp').service('RecoverSrvApi', function($http, $q) {

  var service = {};

  service.recover = function(username, email) {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: 'http://localhost/omt-web/api/user/recoverAccount',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: 
      {
        username: username,
        email: email
      }
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