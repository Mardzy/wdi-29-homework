angular
  .module('photoApp')
  .directive('photoDetails', photoDetails);

function photoDetails(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/views/directives/photoDetails.html',
    scope: {
      photo: '='
    }
  };
}
