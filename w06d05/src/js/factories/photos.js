angular
  .module('photoApp')
  .factory('Photo', Photo);

Photo.$inject = ['$resource', 'API'];
function Photo($resource, API){
  return $resource(`${API}/photos/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
