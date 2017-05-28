(function() {
      function UserCtrl($scope) {
          
          $scope.user = function();
          $scope.firstName = "John";
          $scope.secondName = "Doe";
         $scope.email = "JohnDoe@gmail.com";
          
      $scope.user = function() {
        ($scope.firstName && $scope.secondName && $scope.email)
         }
      
     $scope.userId = 0;
     var userId = $scope.userId;
     if (user == 0){
     userId = (userId + 1);
     console.log(userId);
     };
          
      
  
      angular
          .module('Found')
          .controller('UserCtrl', UserCtrl);
  })(); 