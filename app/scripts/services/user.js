'use strict';

angular.module('monarcPocApp').service('UserSrv', function() {

  var service = {},
      username=null;

  service.getUser = function(){
      return this.username;
  };

  service.setUser = function(username) {
    this.username = username;
  };



  return service;

});