var passport = require('passport');

module.exports = function(app) {
    app.route('/')
        .get(function(req, res, next) {
            if(req.isAuthenticated()) {
                return next();
            } else {
                res.render("auth");
            }
        });
    
    app.route('/auth/github')
        .get(passport.authenticate('github'));

    app.route('/auth/github/callback')
        .get(passport.authenticate('github', {
            successRedirect: '/'
        }));
}