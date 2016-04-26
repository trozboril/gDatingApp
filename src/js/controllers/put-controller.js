(function () {

  'use strict';

  angular.module('gDates')
    .controller('putController', putController);

  registerController.$inject = ['$rootScope', '$scope', '$location'];

  function registerController($rootScope, $scope, $location) {
    $scope.user = {
        names: {
          firstName: $rootScope.currentUser.names.firstName,
          lastName: $rootScope.currentUser.names.lastName
        },
        address: {
          geo: {
            lat: $rootScope.currentUser.address.geo.lat,
            lng: $rootScope.currentUser.address.geo.lat
          }
        },
        phone: $rootScope.currentUser.phone,
        email: $rootScope.currentUser.email,
        slug: $rootScope.currentUser.slug,
        username: $rootScope.currentUser.username
      };
  }

})();