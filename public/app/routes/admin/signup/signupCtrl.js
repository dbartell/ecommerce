angular.module("corApp").controller("signupCtrl", function($scope, authService, $location) {
  $scope.signup = function(user) {
    if (user.password === $scope.password_repeat) {
        authService.register(user).then(function(response) {
          $location.path('/home');
          $scope.user = response;
                });
          }
    else {
      alert('Passwords do not match');
    }
  };
});
