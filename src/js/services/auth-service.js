(function () {

  'use strict';

  /**
  1. login
  2. logout
  3. register
  4. set user info into localstorage
  5. get user info from localstorage
  **/

  angular.module('gDates')
    .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  function authService($http, $window) {
    var user = {};

    var config = {
      headers: {
        'Accept': 'application/json'
      }
    };
    
    return {
      login: function(user) {
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', user, config);
      },
      logout: function() {
        console.log('yolo');
        $window.localStorage.clear();
      },
      register: function(user) {
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', user, config);
      },
      setUserInfo: function(userData) {
        $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
      },
      getUserInfo: function(userData) {
        return $window.localStorage.getItem('user');
      },
    };
  }

})();