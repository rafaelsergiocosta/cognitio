module.exports = function(app) {
    var controller = app.controllers.post;
    
    app.route('/posts')
        .get(controller.listPosts)
        .post(controller.salvaPost);

    app.route('/posts/:id')
        .get(controller.getPost)
        .delete(controller.removePost)
        .post(controller.salvaPost);
}