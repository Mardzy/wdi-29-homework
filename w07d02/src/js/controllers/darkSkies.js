angular
  .module('darkSkies')
  .controller('DarkSkiesIndexCtrl', DarkSkiesIndexCtrl);

DarkSkiesIndexCtrl.$inject = ['$http'];
function DarkSkiesIndexCtrl($http) {
  const vm = this;

  function getForecast() {
    $http
      .get('/api/weather', { params: { lat: 50, lng: -0.12 }})
      .then((response) => {
        vm.weather = response.data;
        console.log(vm.weather);
      });
  }

  getForecast();

}
