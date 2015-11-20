'use strict';

angular.module('monarcPocApp').service('UserSrv', function() {

  var service = {},
      username=null;

  service.getUser = function(){
  	if ( (localStorage.getItem("user") !== null) || (localStorage.getItem("user") !== undefined)){
      return this.username;
  	}
  	return null;
  };

  service.setUser = function(username) {
  	localStorage.setItem("user", username);
    this.username = username;
  };



  return service;

});