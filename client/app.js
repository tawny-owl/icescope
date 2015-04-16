angular
  .module('icescope', [
    // 'icescope.home',
    // 'icescope.code',
    'icescope.room',
    'ui.router'
  ])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
   .state('code', {
      url: '/code',
      templateUrl: 'templates/code.html',
   })
   .state('room', {
      url: '/:roomID',
      templateUrl: 'templates/room.html',
      controller: 'roomController'
   });

  $urlRouterProvider.otherwise('/');
}]);



