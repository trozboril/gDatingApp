app.directive('register', function (){

  return {
    restrict: 'EA',
    templateUrl: 'templates/register.html',
    controller: function ($scope, authService){
      $scope.user = {
        names: {
          firstName: '',
          lastName: ''
        },
        address: {
          geo: {
            lat: 0,
            lng: 0
          }
        },
        phone: '',
        email: '',
        slug: '',
        username: ''
      };
      //controller attached to directive
      $scope.register = function () {
        authService.register($scope.user);
    };
  }
};
});

app.directive('update', function () {
  return {
    restrict: 'EA',
    templateUrl: 'templates/profile.html',
    controller: function ($scope, $rootScope) {
      $scope.theUser = {
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
      $scope.update = function (id) {
        $http({
          method: 'PUT',
          url: 'https://galvanize-student-apis.herokuapp.com/gdating/members/' + id,
          data: $scope.theUser
        })
          .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
      }
    
  };
});