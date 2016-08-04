(function() {
  angular.module('ngPortPage')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'html/views/home.html',
    })
    .when('/about-me', {
      templateUrl: 'html/views/about-me.html',
    })
    .when('/professional-projects', {
      templateUrl: 'html/views/professional-projects.html',
    })
    .when('/resume', {
      templateUrl: 'html/views/resume.html',
    })
    .when('/personal-interests', {
      templateUrl: 'html/views/personal-interests.html'
    })
    .when('/contact',{
      templateUrl: 'html/views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
}());
