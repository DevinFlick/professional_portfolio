angular.module('ngPortPage')
        .directive('navbar', function(){
  return{
    restrict: 'E', //E use as Element
    scope:{
      navbar: '='
    },
    templateUrl:'/html/navbar.html'
  };
});
