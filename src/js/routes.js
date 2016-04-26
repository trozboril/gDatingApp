app.config(function($routeProvider, $locationProvider){
 
 $routeProvider
   
   .when('/', {
    templateUrl: '../templates/main.html',
    restricted: false,
    preventLoggedIn: false
   })
   .when('/login', {
    templateUrl: '../templates/login.html',
    restricted: false,
    preventLoggedIn: true
   })
   .when('/register', {
    template:'<register></register>',
    restricted: false,
    preventLoggedIn: true
   })
   .when('/profile', {
    template:'<update></update>',
    restricted: true,
    preventLoggedIn: false
   })
   .when('/members', {
    templateUrl: '../templates/user.html'
   })
   .when('/profile/:username', {
    templateUrl: '../templates/profile.html'
   })
   .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserInfo();
          $location.path('/login');
        }
      }
    })

   .otherwise('/');
   

});