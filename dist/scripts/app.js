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
    
     .state('artists', {
        url: '/artists',
        templateUrl: '/templates/artists.html',
        controller: 'ArtistsCtrl as artists'
      })
    
    .state('test', {
        url: '/test',
        templateUrl: '/templates/test.html',
        controller: 'TestCtrl as test'
      })
     
    .state('messenger', {
        url: '/messenger',
        templateUrl: '/templates/messenger.html',
        controller: 'MessengerCtrl as messenger'
      })
    
     .state('room', {
        url: '/messenger',
        templateUrl: '/templates/messenger.html',
        controller: 'RoomCtrl as room'
      })
    
    
      .state('djSignup', {
        url: '/dj-signup',
        templateUrl: '/templates/djsignup.html',
        controller: 'DjSignupCtrl as djsignup'
      });
      
      

  }
    


  angular
    .module('partybeats', [ 'ui.router'])
    .config(config);
})()
