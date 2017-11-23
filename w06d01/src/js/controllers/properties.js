angular
  .module('PropertyApp')
  .controller('PropertyCtrl', PropertyCtrl);

PropertyCtrl.$inject = ['$http'];
function PropertyCtrl($http) {
  const vm = this;
  vm.newProperty = {};
  vm.all = [];

  propertiesIndex();

  function propertiesIndex() {
    $http.get('http://localhost:4000/api/properties')
      .then((response)=> {
        vm.all = response.data;
      });
  }

  vm.propertiesCreate = propertiesCreate;

  function propertiesCreate(){
    $http.post('http://localhost:4000/api/properties', vm.newProperty)
      .then((response) => {
        vm.all.push(response.data);
        vm.newProperty = {};
      });
  }

  vm.propertiesDelete = propertiesDelete;

  function propertiesDelete(property) {
    $http.delete(`http://localhost:4000/api/properties/${property.id}`)
      .then(() => {
        const index = vm.all.indexOf(property);
        vm.all.splice(index, 1);
      });
  }

}//last line
