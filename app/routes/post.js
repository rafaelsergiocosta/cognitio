var verificaAutenticacao = require('../../config/auth');

module.exports = function(app) {
    var controller = app.controllers.post;
    
    app.route('/posts')
        .get(verificaAutenticacao, controller.listPosts)
        .post(verificaAutenticacao, controller.salvaPost);

    app.route('/posts/:id')
        .get(verificaAutenticacao, controller.getPost)
        .delete(verificaAutenticacao, controller.removePost)
        .post(verificaAutenticacao, controller.salvaPost);
}