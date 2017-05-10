(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
         .state('landing', {
             url: '/',
             templateUrl: '/templates/landing.html'
         });
         
         .state('user', {
             url: '/user',
             templateUrl: '/templates/user.html'
         });

     }
 
 
     angular
         .module('partybeats', ['ui.router'])
         .config(config);
