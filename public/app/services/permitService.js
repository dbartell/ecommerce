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
});
