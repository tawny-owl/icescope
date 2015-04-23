(function() {
  angular
  .module('icescope', [
    // 'icescope.home',
    // 'icescope.code',
    'icescope.room',
    'ui.router'
  ])
.config(['$stateProvider', 
         '$locationProvider', 
         '$urlRouterProvider', 
         '$httpProvider', 
  function($stateProvider, 
          $locationProvider,
          $urlRouterProvider, 
          $httpProvider) {

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
      controllerAs: 'room',
      controller: 'RoomCtrl'
   });
   console.log($locationProvider)
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

}]);
})();



