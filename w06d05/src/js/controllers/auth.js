angular
    .module('photoApp')
    .controller('RegisterCtrl', RegisterCtrl)
    .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];

function RegisterCtrl($auth, $state) {
    const vm = this;
    vm.user = {};

    function submit() {
        $auth.signup(vm.user)
            .then(() => $state.go('login'));
    }
    vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state) {
    const vm = this;
    vm.credentials = {};

    function submit() {
        console.log('submit');
        $auth.login(vm.credentials)
            .then(() => $state.go('photosIndex'));
    }
    vm.submit = submit;
}