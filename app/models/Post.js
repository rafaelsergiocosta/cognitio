var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        titulo: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        autor: {
            type: String
        },
        post: {
            type: String
        }
    });

    return mongoose.model('Post', schema);
};