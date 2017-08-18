angular.module('cognitio').factory('Post',
    function($resource) {
        return $resource('/posts/:id');
});