angular
  .module('photoApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('photosIndex', {
      url: '/photos',
      templateUrl: '/js/views/photos/index.html',
      controller: 'PhotosIndexCtrl as photosIndex'
    })
    .state('photosNew', {
      url: '/photos/new',
      templateUrl: '/js/views/photos/new.html',
      controller: 'PhotosNewCtrl as photosNew'
    })
    .state('photosShow', {
      url: '/photos/:id',
      templateUrl: '/js/views/photos/show.html',
      controller: 'PhotosShowCtrl as photosShow'
    })
    .state('photosEdit', {
      url: '/photos/:id/edit',
      templateUrl: '/js/views/photos/edit.html',
      controller: 'PhotosEditCtrl as photosEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    });

  $urlRouterProvider.otherwise('/photos');
}
