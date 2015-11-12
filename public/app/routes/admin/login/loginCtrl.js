angular.module("corApp").controller("loginCtrl", function($scope, authService, $location) {
  $scope.login = function(user) {
  authService.login(user).then(function(response) {
    $location.path('/adminhome');
  });
};

});
