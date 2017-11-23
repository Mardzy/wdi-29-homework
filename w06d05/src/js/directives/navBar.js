angular
    .module('photoApp')
    .directive('navBar', navBar);

function navBar() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/js/views/directives/navBar.html'
    };
}