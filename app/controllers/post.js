var ID_POST_INC = 3;

var posts = [
    {_id: 1, titulo: 'Lorem Ipsum 1',
    autor: 'teste1',
    post: 'Lorem ipsum dolor sit amet'},
    {_id: 2, titulo: 'Lorem Ipsum 2',
    autor: 'teste2',
    post: 'consectetur adipiscing elit'},
    {_id: 3, titulo: 'Lorem Ipsum 3',
    autor: 'teste3',
    post: 'In in est in tellus tempus placerat'}
];

module.exports = function() {
    var controller = {};

    controller.listPosts = function(req, res) {
        res.json(posts);
    };

    controller.getPost = function(req, res) {
        var idPost = req.params.id;
        var post = posts.filter(function(post) {
            return post._id == idPost;
        })[0];
        post ? res.json(post) : res.status(404).send('Post não encontrado');
    };

    controller.removePost = function(req, res) {
        var idPost = req.params.id;

        posts = posts.filter(function(post) {
            return post._id != idPost;
        });
        res.sendStatus(204).end();
    };

    controller.salvaPost = function(req, res) {
        var post = req.body;
        post = post._id ?
        atualiza(post) :
        adiciona(post);
        res.json(post);
    };

    function adiciona(postNovo) {
        postNovo._id = ++ID_POST_INC;;
        posts.push(postNovo);
        return postNovo;
    }

    function atualiza(postAlterar) {
        posts = posts.map(
            function(post) {
                if(post._id == postAlterar._id) {
                    post = postAlterar;
                }
                return post;
            }
        );
        return postAlterar;
    };

    return controller;
}
