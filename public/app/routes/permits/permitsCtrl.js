angular.module('corApp').controller('permitsCtrl', function($scope, permitService) {
  $scope.permit = {};
  // JQUERY FOR ACCORDIAN
  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
  // ADDING PERMIT

  $scope.addPermit = function() {
    permitService.submitPermit($scope.permit);
    console.log("You\'ve added a Permit");
    console.log($scope.permit);
  };

});
