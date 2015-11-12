angular.module('corApp').directive('footBar', function() {
  return {
      restrict: 'EA',
      templateUrl: 'app/directives/footbar/footbarTmpl.html',
      controller: "footbarCtrl"
    };
});
