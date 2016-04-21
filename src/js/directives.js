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