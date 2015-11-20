'use strict';

angular.module('monarcPocApp').service('FormSrvApi', function($http, $q) {

  var service = {};

  service.saveOrder = function(order) {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: 'http://localhost/omt-web/api/orders',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: 
      {
        client: order.client,
        contact: order.contact,
        instructions: order.instructions,
        jobNumber: order.jobNumber,
        jobType: order.jobType,
        orderNumber: order.orderNumber,
        template: order.template,
        title: order.title,
        date: order.year+'-'+order.month+'-'+order.day+' '+order.hour+':'+order.minute
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