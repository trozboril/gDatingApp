app.config(function($routeProvider, $locationProvider){
 
 $routeProvider
   
   .when('/', {
    templateUrl: '../templates/main.html'

   })
   .when('/login', {
    templateUrl: '../templates/login.html'
   })
   .when('/register', {
    template:'<register></register>'
   })
   .when('/members', {
    templateUrl: '../templates/user.html'
   })
   .when('/profile/:username', {
    templateUrl: '../templates/profile.html'
   })

   .otherwise('/');
   

});