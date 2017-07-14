angular.module('cognitio').controller('PostsController',
    function($scope, $resource) {
        $scope.posts = [];

        $scope.filtro = '';

        $scope.init = function() {
            buscaPosts();
        };

        var Post = $resource('/posts/:id');
        
        function buscaPosts() {
            Post.query(
                function(posts) {
                    $scope.posts = posts;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de posts");
                    console.log(erro);
                }
            );
        }

        $scope.remove = function(post) {
            Post.delete({id: post._id},
                buscaPosts,
                function(erro) {
                    console.log('Não foi possível remover o post');
                    console.log(erro);
                }
            );
        };

        $scope.init();
});