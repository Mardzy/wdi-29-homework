angular
    .module('photoApp')
    .directive('dtHamburgerMenu', dtHmburgerMenu);

function dtHmburgerMenu() {
    return {
        restrict: 'E',
        templateUrl: '/js/views/directives/hamburgerMenu.html',
        controller: dtHmburgerMenuCtrl,
        controllerAs: 'dtHamburgerMenu',
        transclude: true
    };
}

function dtHmburgerMenuCtrl() {
    var vm = this;

    vm.isShowingMenu = false;
    vm.openMenu = openMenu;
    vm.closeMenu = closeMenu;

    function openMenu() {

        vm.isShowingMenu = true;
    }

    function closeMenu() {
        vm.isShowingMenu = false;
    }
}