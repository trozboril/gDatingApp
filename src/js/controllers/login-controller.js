(function () {

  'use strict';

  angular.module('gDates')
    .controller('loginController', loginController);

  loginController.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function loginController($rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.login = function() {
      authService.login($scope.user)
        .then(function(user) {
          authService.setUserInfo(user);
          $location.path('/members', user);
          $rootScope.currentUser = JSON.parse(authService.getUserInfo());
          console.log($rootScope.currentUser);
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  }

})();

//clemmie.prohaska74_wehner@hotmail.com
//GJO_6cA3Epo4sJV8V8Yi