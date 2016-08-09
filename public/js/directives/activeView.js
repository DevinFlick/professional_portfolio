angular.module('ngPortPage')
        .directive('activeView', ['$location', function ($location){
          return {
            restrict: 'A', // A use as Attribute
            replace: false,
            link: function(scope, elem){
              scope.$on("$routeChangeSuccess", function(){
                var hrefs = ['/#' + $location.path(),
                              '#' + $location.path(),
                              $location.path()];
                angular.forEach(elem.find('a'), function (a){
                  a = angular.element(a);
                  if (-1 !== hrefs.indexOf(a.attr('href'))){
                    a.parent().addClass('active');
                  } else {
                    a.parent().removeClass('active');
                  };
                });
              });
            }
          }
        }]);
// source code from net below
// angular.module('ngPortPage')
//     .directive('bsActiveLink', ['$location', function ($location) {
//     return {
//         restrict: 'A', //use as attribute
//         replace: false,
//         link: function (scope, elem) {
//             //after the route has changed
//             scope.$on("$routeChangeSuccess", function () {
//                 var hrefs = ['/#' + $location.path(),
//                              '#' + $location.path(), //html5: false
//                              $location.path()]; //html5: true
//                 angular.forEach(elem.find('a'), function (a) {
//                     a = angular.element(a);
//                     if (-1 !== hrefs.indexOf(a.attr('href'))) {
//                         a.parent().addClass('active');
//                     } else {
//                         a.parent().removeClass('active');
//                     };
//                 });
//             });
//         }
//     }
// }]);
