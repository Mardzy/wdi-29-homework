angular
  .module('worldWonders')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('wondersIndex', {
      url: '/wonders',
      templateUrl: '/js/views/index.html',
      controller: 'WondersIndexCtrl as wondersIndex'
    })
    // .state('wondersNew', {
    //   url: '/wonders/new',
    //   templateUrl: '/js/views/new.html',
    //   controller: 'WondersNewCtrl as wondersNew'
    // })
    .state('wondersShow', {
      url: '/wonders/:id',
      templateUrl: '/js/views/show.html',
      controller: 'WondersShowCtrl as wondersShow'
    });
  // .state('wondersEdit', {
  //   url: '/wonders/:id/edit',
  //   templateUrl: '/js/views/edit.html',
  //   controller: 'WondersEditCtrl as wondersEdit'
  // });

  $urlRouterProvider
    .otherwise('/wonders');

}
