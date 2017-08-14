angular.module('cognitio').controller('PostsController',
    function(Post, $scope) {
        
        $scope.posts = [];

        $scope.filtro = '';

        $scope.mensagem = {texto: ''};

        $scope.init = function() {
            buscaPosts();
        };
        
        function buscaPosts() {
            Post.query(
                function(posts) {
                    $scope.posts = posts;
                },
                function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível obter a lista de posts'};
                    console.log(erro);
                }
            );
        }

        $scope.remove = function(post) {
            Post.delete({id: post._id},
                buscaPosts,
                function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível remover o post'};
                    console.log(erro);
                }
            );
        };

        $scope.init();
});