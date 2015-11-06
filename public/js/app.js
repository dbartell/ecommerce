var app = angular.module('ecommerceApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("home", {
      url: "/home",
      template: '<p>hi</p>',
      controller: "homeCtrl"
    });
});
