angular.module('corApp').controller('footbarCtrl', function(userService, $scope) {
    $(document).ready(function() {
      $('.modal-trigger').leanModal();
    });
    $scope.submitNewUser = function(user) {
      userService.newUserService(user);
    };
    $scope.loginSubmit = function(user) {
      userService.loginSubmit(user).then(function(res) {

      userService.getUserName().then(function(res) {
          if (res) {
            $scope.customerName = 'Welcome, ' + res.data.name;
            $scope.loginOut = !$scope.loginOut;
            $('#loginModal').closeModal();
          }
      });
      });
    };
});
