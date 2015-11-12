angular.module('corApp')

.service('permitService', function($http, constants) {
  this.submitPermit = function(data) {
    return $http({
      method: 'POST',
      url: constants.baseURL + 'permits',
      data: {
        permit: data
      }
   });
 };
 this.getPermits = function () {
   return $http({
     method: "GET",
     url: constants.baseURL + 'permits',
   }).then(function(response){
     return response;
   });
 };
 this.deletePermit = function (id) {
   return $http({
     method: 'DELETE',
     url: constants.baseURL + 'permits' + id
   });
 };

});
