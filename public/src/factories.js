app.factory('Provider', ['$resource', function ($resource) {
	   return $resource('/api/post/:id', { id: '@id'}, {
            'update': { method: 'PUT' }
        });

    }]);
// , 'list': {method: 'GET', isArray: true}
            // , 'get': {method: 'GET', isArray: false}