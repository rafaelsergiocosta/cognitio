var posts = [
    {_id: 1, titulo: 'Post Exemplo 1',
    autor: 'cont1@empresa.com.br'},
    {_id: 2, titulo: 'Post Exemplo 2',
    autor: 'cont2@empresa.com.br'},
    {_id: 3, titulo: 'Post Exemplo 3',
    autor: 'cont3@empresa.com.br'}
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
    return controller;
}
