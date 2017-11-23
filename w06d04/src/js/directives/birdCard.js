angular.module('birdApp')
  .directive('card', birdCard);

function birdCard() {
  return {
    restrict: 'E',
    templateUrl: 'js/views/birds/directives/birdCard.html',
    replace: true,
    scope: {
      bird: '=',
      birdsDelete: '&'
    }
  };
}
