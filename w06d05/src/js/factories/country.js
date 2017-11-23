angular
  .module('photoApp')
  .factory('Country', Country);

Country.$inject = ['$resource', 'API'];
function Country($resource, API){
  return $resource(`${API}/countries/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
