(function () {

  'use strict';

  angular.module('gDates')
    .controller('putController', putController);

  registerController.$inject = ['$rootScope', '$scope', '$location'];

  function registerController($rootScope, $scope, $location) {
    $scope.editProfile = function(id) {
      console.log('hit');
      $http({
        method: 'PUT',
        url: 'https://galvanize-student-apis.herokuapp.com/gdating/members/' + id,
        data: {
          firstName: $scope.firstName,
          lastName: $scope.lastName,
          phone: $scope.phone,
          email: $scope.email,
          username: $scope.username,
          slug: $scope.slug,
          lat: $scope.lat,
          lng: $scope.lng
        }
      })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  }

})();