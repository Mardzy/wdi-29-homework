angular
  .module('photoApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$transitions', '$rootScope', '$state', '$auth'];
function MainCtrl($transitions, $rootScope, $state, $auth) {
  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated;

  function logout(){
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;

  $transitions.onSuccess({}, (transition) => {
    vm.menuIsOpen = false;
    vm.pageName = transition.$to().name;
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
  });
  $rootScope.$on('error', (e, err) => {
    vm.stateHasChanged = false;
    vm.message = err.data.message;
    if(err.status === 401 && vm.pageName !== 'login'){
      $state.go('login');
    }
  });
}
