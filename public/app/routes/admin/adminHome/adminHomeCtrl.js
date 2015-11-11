angular.module('corApp').controller('adminHomeCtrl', function($scope, permitService, $route) {

  var getData = function () {
    permitService.getPermits().then(function (response) {
      $scope.permits = response.data;
      console.log(response.data);
    });
  };
  $scope.deleteDaPermit = function(id) {
    permitService.deletePermit(id).then(function() {
        getData();
    });
  };

  getData();
});
