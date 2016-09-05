// Don't forget to put ngRoute(SINGULAR!!!) as a dependency in app.js, don't forget to put it on the index as well
(function() {
  angular.module('ngPortPage')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'html/views/home.html',
    })
    .when('/professional-projects', {
      templateUrl: 'html/views/professional-projects.html',
    })
    .when('/resume', {
      templateUrl: 'html/views/resume.html',
    })
    .when('/contact',{
      templateUrl: 'html/views/contact.html',
    })
    .otherwise({
      redirectTo: '/',
    });
  }
}());
