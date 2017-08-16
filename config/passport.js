var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: '38cbdd9795c2a2cbf1ee',
        clientSecret: '17db2340ae987cb08c51c939fd40bf8672a5a57c',
        callbackURL: '/auth/github/callback'
        }, function(accessToken, refreshToken, profile, done) {
            Usuario.findOrCreate(
                { "login" : profile.username},
                { "nome" : profile.username},
                function(erro, usuario) {
                    if(erro) {
                        console.log(erro);
                        return done(erro);
                    }
                    return done(null, usuario);
                }
            );
        }
    ));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
        .then(function(usuario) {
            done(null, usuario);
        });
    });
}