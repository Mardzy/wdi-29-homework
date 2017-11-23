angular
  .module('photoApp')
  .controller('PhotosIndexCtrl', PhotosIndexCtrl)
  .controller('PhotosNewCtrl', PhotosNewCtrl)
  .controller('PhotosShowCtrl', PhotosShowCtrl)
  .controller('PhotosEditCtrl', PhotosEditCtrl);

PhotosIndexCtrl.$inject = [ 'Photo'];
function PhotosIndexCtrl(Photo) {
  const vm = this;
  vm.all = Photo.query();
}

PhotosNewCtrl.$inject = ['$state', 'Photo', 'Country'];
function PhotosNewCtrl($state, Photo, Country) {
  const vm  = this;
  vm.countries = Country.query();
  vm.create = photosCreate;

  function photosCreate(){
    Photo
      .save(vm.photo)
      .$promise
      .then(() => {
        $state.go('photosIndex');
      });
  }
}

PhotosShowCtrl.$inject = ['$state', 'Photo'];
function PhotosShowCtrl($state, Photo) {
  const vm = this;
  vm.photo = Photo.get($state.params);
  vm.delete = photosDelete;

  function photosDelete(){
    Photo.delete($state.params)
      .$promise
      .then(() => {
        $state.go('photosIndex');
      });
  }
}

PhotosEditCtrl.$inject = ['$state', 'Photo', 'Country'];
function PhotosEditCtrl($state, Photo, Country) {
  const vm = this;
  vm.photo = {};
  vm.countries = Country.query();
  vm.update = photosUpdate;

  photosShow();

  function photosShow(){
    Photo
      .get($state.params)
      .$promise
      .then((photo) => {
        vm.photo = photo;
        vm.photo.country = vm.photo.country.id;
      });
  }

  function photosUpdate(){
    Photo
      .update($state.params, vm.photo)
      .$promise
      .then(() => {
        $state.go('photosShow', $state.params);
      });
  }
}
