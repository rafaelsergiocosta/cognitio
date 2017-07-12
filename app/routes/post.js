module.exports = function(app) {
    var controller = app.controllers.post;

    app.get('/posts', controller.listPosts);
    app.get('/posts/:id', controller.getPost);
}