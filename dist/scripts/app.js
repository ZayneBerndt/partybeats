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
    
      .state('djSignup', {
        url: '/dj-signup',
        templateUrl: '/templates/djsignup.html',
        controller: 'DjSignupCtrl as djsignup'
      });
      
      

  }
    


  angular
    .module('partybeats', [ 'firebase', 'ui.router'])
    .config(config);
})()
