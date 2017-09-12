angular.module('cognitio', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider.when('/posts', {
            templateUrl: 'partials/posts.html',
            controller: 'PostsController'
        });

        $routeProvider.when('/post', {
            templateUrl: 'partials/post.html',
            controller: 'PostController'
        });

        $routeProvider.when('/post/:postId', {
            templateUrl: 'partials/post.html',
            controller: 'PostController'
        });

        $routeProvider.when('/view/:postId', {
            templateUrl: 'partials/view.html',
            controller: 'PostController'
        });
        
        $routeProvider.otherwise({redirectTo: '/posts'});
});