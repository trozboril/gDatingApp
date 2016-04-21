app.controller('memberMainCtrl', ['$scope', '$http',
   function ($scope, $http) {

    function getTheAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
    }

   $scope.getMembers = function () {
    $http({
      method: 'GET',
      url: 'https://galvanize-student-apis.herokuapp.com/gdating/members'
    })
    .then(function (results) {
      console.log(results.data.data[0]);
      $scope.members = results.data.data;
      $scope.getAge = function (date) {
        var newDate = date.slice(0,10);
        var dateString = newDate.replace(/[|&;$%@"<>()+,]/g, "");
        $scope.memberAge = getTheAge(dateString);
      };
    });
  };

  $scope.getMembers();
  
  
}]);