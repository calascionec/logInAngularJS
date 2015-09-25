var LogIn = angular.module("LogIn", ["ui.router"]);

LogIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state("sign-in", {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: "SignInCtrl"
  });

  $stateProvider.state("who-is-here", {
    url: "/who-is-here",
    templateUrl: "partials/who-is-here.html",
    controller: "WhoIsHereCtrl"
  });
})
