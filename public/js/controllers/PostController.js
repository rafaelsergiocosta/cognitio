angular.module('cognitio').controller('PostController',
    function($scope, $routeParams, Post) {

        $scope.post = new Post();
        
        if($routeParams.postId) {
            Post.get({id: $routeParams.postId},
                function(post) {
                    $scope.post = post;
                },
                function(erro) {
                    $scope.mensagem = {
                        texto: 'Não foi possível obter o post.'
                    };
                    console.log(erro);
                }
            );
        }

        $scope.salva = function() {
            $scope.post.$save()
                .then(function() {
                    $scope.mensagem = {texto: 'Salvo com sucesso'};
                    // limpa o formulário
                    $scope.post = new Post();
                })
                .catch(function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível salvar'};
                });
        };
});