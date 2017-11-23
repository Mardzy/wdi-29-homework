angular
  .module('birdApp')
  .controller('BirdsIndexCtrl', BirdsIndexCtrl)
  .controller('BirdsNewCtrl', BirdsNewCtrl)
  .controller('BirdsShowCtrl', BirdsShowCtrl)
  .controller('BirdsEditCtrl', BirdsEditCtrl);

BirdsIndexCtrl.$inject = ['Bird'];

function BirdsIndexCtrl(Bird) {
  const vm = this;
  vm.delete = birdsDelete;

  birdsIndex();

  function birdsIndex() {
    vm.all = Bird.query();
  }

  function birdsDelete(bird){
    Bird
      .delete({ id: bird.id })
      .$promise
      .then(() => {
        const index = vm.all.indexOf(bird);
        vm.all.splice(index, 1);
      });
  }
}


BirdsNewCtrl.$inject = ['$state', 'Bird'];
function BirdsNewCtrl($state,  Bird ) {
  const vm  = this;
  vm.bird = {};
  vm.create = birdsCreate;

  function birdsCreate(){
    vm.add = add;
    function add() {
      if(vm.birdForm.$valid){
        vm.all.push(vm.bird);
        vm.bird = {};
        vm.birdForm.$setPristine();
        vm.birdForm.$untouched();
      }
    }
    Bird
      .save(vm.bird)
      .$promise
      .then(() => {
        $state.go('birdsIndex');
      });
  }



}

BirdsShowCtrl.$inject = [ '$state','Bird'];

function BirdsShowCtrl($state, Bird){
  const vm = this;
  vm.bird = {};

  birdsShow();

  function birdsShow() {
    vm.bird = Bird.get($state.params);
  }
}

BirdsEditCtrl.$inject = ['$state', 'Bird'];
function BirdsEditCtrl( $state, Bird) {
  const vm = this;
  vm.bird = {};
  vm.update = birdsUpdate;

  birdsShow();

  function birdsShow(){
    vm.bird = Bird.get($state.params);

  }

  function birdsUpdate(){
    Bird
      .update($state.params, vm.bird)
      .$promise
      .then(() => {
        $state.go('birdsIndex');
      });
  }
}
