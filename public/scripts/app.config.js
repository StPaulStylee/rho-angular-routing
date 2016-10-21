angular.module('routeApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/littleMac', {
           templateUrl: 'views/littleMac.html'
         }).when('/glassJoe', {
           templateUrl: 'views/glassJoe.html'
         }).when('/pistonHonda', {
           templateUrl: 'views/pistonHonda.html'
         });

         // lets us use normal looking links
         // i.e. /home
         // remember, to use this, need to set base href in html
         $locationProvider.html5Mode(true);
       });
