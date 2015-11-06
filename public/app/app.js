var app = angular.module('corApp', ['ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider

    .when('/', {
    templateUrl: "app/routes/home/homeTmpl.html",
    controller: "homeCtrl"
  })
  .otherwise({
    redirectTo: '/'
  });

});
