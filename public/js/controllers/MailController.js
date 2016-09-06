(function() {
  angular.module('ngPortPage')
          .controller('MailController', MailController);

  MailController.$inject = ['$scope', '$http'];
  
  function MailController($scope, $http){
    $scope.sendMail = sendMail;
    var baseUrl = 'https://devinflick-portfolio.herokuapp.com/send';

    function sendMail(msg){
      return $http.post(baseUrl, msg)
                  .then(function(response){
                    console.log('sent email', response);
                  });
    }
  }
}());
