'use strict';

angular.module('monarcPocApp').service('LoginSrvApi', function($http, $q) {

  var service = {};

  service.login = function(username, password) {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      //url: './scripts/login/services/login.json',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: 'http://localhost/omt-web/auth/login',
      data: 
      {
        username: username,
        password: password
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

  service.logout = function() {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: 'http://localhost/omt-web/auth/logout',
      data: {}
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