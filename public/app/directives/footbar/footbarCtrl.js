angular.module('corApp').controller('footbarCtrl', function(authService, $scope, $location) {
    $(document).ready(function() {
      $('.modal-trigger').leanModal();
    });
  });
