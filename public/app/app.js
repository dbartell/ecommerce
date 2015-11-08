var app = angular.module('corApp', ['ngRoute', 'ui.materialize']);

app.config(function ($routeProvider) {

  $routeProvider

  .when('/home', {
    templateUrl: "app/routes/home/homeTmpl.html",
    controller: "homeCtrl"
  })
  .when('/services', {
    templateUrl: "app/routes/services/servicesTmpl.html",
    controller: "servicesCtrl"
  })
  .when('/pilot', {
    templateUrl: "app/routes/pilot/pilotTmpl.html",
    controller: "pilotCtrl"
  })
  .when('/permits', {
    templateUrl: "app/routes/permits/permitsTmpl.html",
    controller: "permitsCtrl"
  })
  .when('/contactinfo', {
    templateUrl: "app/routes/contactinfo/contactinfoTmpl.html",
    controller: "contactinfoCtrl"
  })
  .when('/howto', {
    templateUrl: "app/routes/howto/howtoTmpl.html",
    controller: "howtoCtrl"
  })
  .otherwise({
    redirectTo: '/home'
  });

});
