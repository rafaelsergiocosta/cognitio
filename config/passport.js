var config = require('./config')();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    var Usuario = mongoose.model('Usuario');

    var urlCallback = 'http://' + config.domain + ':'
    + config.port;

    passport.use(new GitHubStrategy({
        clientID: config.github.clientID,
        clientSecret: config.github.clientSecret,
        callbackURL: urlCallback + '/auth/github/callback'
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

    passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: urlCallback + '/auth/facebook/callback'
        }, function(accessToken, refreshToken, profile, done) {
            Usuario.findOrCreate(
                { "login" : profile.displayName},
                { "nome" : profile.displayName},
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