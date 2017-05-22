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
        templateUrl: '/templates/landing.html',
        controller: 'LandingCtrl as landing' 
      })
    
      .state('signin', {
        url: '/signin',
        templateUrl: '/templates/signin.html',
        controller: 'SigninCtrl as signin'
      })
      
      .state('user', {
        url: '/user',
        templateUrl: '/templates/user.html',
        controller: 'UserCtrl as user'
      });
      
      

  }

  angular
    .module('partybeats', ['ui.router'])
    .config(config);
})();