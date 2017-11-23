/* global google */

angular.module('worldWonders')
  .directive('googleMap', googleMap);

function googleMap(){
  return {
    restrict: 'E',
    template: '<div class="map">I am a google map</div>',
    replace: true,
    scope: {
      center: '='
    },

    link($scope, $element) {
      const map = new google.maps.Map($element[0], {
        center: { lat: 51.5, lng: -0.08 },
        zoom: 10
      });

      const marker = new google.maps.Marker({
        map: map
      });
      $scope.$watch('center', () => {
        if(!$scope.center) return false;
        map.setCenter($scope.center);
        marker.setPosition($scope.center);
      });
    }
  };
}
