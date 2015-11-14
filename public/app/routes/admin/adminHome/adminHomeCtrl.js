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

  $scope.demoFromHTML = function() {
    console.log("hello");
      var pdf = new jsPDF('p', 'pt', 'letter');
      source = $('#customers')[0];
      specialElementHandlers = {
          '#bypassme': function (element, renderer) {
              return true;
          }
      };
      margins = {
          top: 50,
          bottom: 50,
          left: 75,
          width: 460
      };
      pdf.fromHTML(
      source,
      margins.left,
      margins.top, {
          'width': margins.width,
          'elementHandlers': specialElementHandlers
      },
      function (dispose) {
          pdf.save('Permit.pdf');
      }, margins);
  };
});
