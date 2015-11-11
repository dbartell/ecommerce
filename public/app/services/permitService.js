angular.module('corApp')

.service('permitService', function($http) {
  this.submitPermit = function(data) {
    return $http({
      method: 'POST',
      url: "http://localhost:9090/permits",
      data: {
        permit: data
      }
   });
 };
 this.getPermits = function () {
   return $http({
     method: "GET",
     url: "http://localhost:9090/permits"
   }).then(function(response){
     return response;
   });
 };
 this.deletePermit = function (id) {
   return $http({
     method: 'DELETE',
     url: "http://localhost:9090/permits/" + id
   });
 };

});
