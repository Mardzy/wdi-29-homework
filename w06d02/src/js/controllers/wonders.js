angular
  .module('worldWonders')
  .controller('WondersIndexCtrl', WondersIndexCtrl)
  .controller('WondersShowCtrl', WondersShowCtrl);

WondersIndexCtrl.$inject = ['$http'];
function WondersIndexCtrl($http){
  const vm = this;
  vm.all = [];
  vm.index = wondersIndex;

  wondersIndex();
  function wondersIndex() {
    $http
      .get('/api/wonders')
      .then(response => {
        vm.all = response.data;
      });
  }

}

WondersShowCtrl.$inject = ['$http', '$state'];
function WondersShowCtrl($http, $state){
  const vm = this;
  vm.wonder = {};

  wondersShow();

  function wondersShow(){
    $http.get(`/api/wonders/${$state.params.id}`, vm.wonder)
      .then((response) => {
        vm.wonder = response.data;
      });
  }
}
