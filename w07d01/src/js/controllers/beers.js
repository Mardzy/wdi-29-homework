angular
  .module('beerApp')
  .controller('BeersIndexCtrl', BeersIndexCtrl);

BeersIndexCtrl.$inject = ['$http', 'filterFilter', '$scope'];
function BeersIndexCtrl($http, filterFilter, $scope) {
  const vm = this;
  vm.all = [];
  let page = 1;

  function getBeers(){
    $http.get('https://api.punkapi.com/v2/beers', {
      params: {
        page,
        per_page: 12
      }
    })
      .then((response) => {
        vm.all = vm.all.concat(response.data);
        filterBeer();
      });
  }
  getBeers();

  function filterBeer() {
    vm.filtered = filterFilter(vm.all, vm.q);
  }
  filterBeer();

  $scope.$watchGroup([
    () => vm.q
  ] , filterBeer);


  vm.addMore =  function(){
    page++;
    getBeers();
    console.log(page);
  };

}
