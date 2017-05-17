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
      })
    
      .state('collection', {
        url: '/collection',
        templateUrl: '/templates/collection.html'
      });
  }

  angular
    .module('partybeats', ['ui.router'])
    .config(config);
})();