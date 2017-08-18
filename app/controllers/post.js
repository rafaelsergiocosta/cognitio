module.exports = function(app) {

    var Post = app.models.Post;

    var controller = {};
    
    controller.listPosts = function(req, res) {
        Post.find().exec()
        .then(
            function(posts) {
                res.json(posts);
            },
            function(erro) {
                console.log(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.getPost = function(req, res) {
        var _id = req.params.id;
        Post.findById(_id).exec()
        .then(
            function(post) {
                if (!post) throw new Error("Post não encontrado");
                res.json(post);
            },
            function(erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removePost = function(req, res) {
        var _id = req.params.id;
        Post.remove({"_id" : _id}).exec()
        .then(
            function() {
                res.end();
            },
            function(erro) {
                return console.error(erro);
            }
        );
    };

    controller.salvaPost = function(req, res) {
        var _id = req.body._id;
        if(_id) {
            Post.findByIdAndUpdate(_id, req.body).exec()
            .then(
                function(post) {
                    res.json(post);
                },
                function(erro) {
                    console.error(erro)
                    res.status(500).json(erro);
                }
            );
        } else {
            Post.create(req.body)
            .then(
                function(post) {
                    res.status(201).json(post);
                },
                function(erro) {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        }
    };

    return controller;
}
