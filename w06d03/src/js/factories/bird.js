angular
  .module('birdApp')
  .factory('Bird', Bird );

Bird.$inject = ['API', '$resource'];

function Bird(API, $resource) {
  return $resource(`${API}/birds/:id`, { id: '@id'},{
    'update': {method: 'PUT'}
  });
}
