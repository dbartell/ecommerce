angular.module('corApp').controller('adminHomeCtrl', function($scope, permitService) {



  permitService.getPermits().then(function (response) {
    $scope.permits = response.data;
    console.log(response.data);
  });
});
