const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req, email, password, done){
        //find user and establish identity
        User.findOne({email: email}, function(err, user){
            if(err){
                req.flash('error', err);
                return done(err);
            }
            if(!user || user.password != password){
                req.flash('error', 'Invalid Username / Password');
                return done(null, false);
            }
            return done(null, user); // user found so passing on the user
        });
    }
));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id); // here id is automatically encrypted
});

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('error in finding user --> passport');
            return done(err);
        }
        return done(null, user);
    });
});

//check if user is authenticated 
passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){ // if user is signed in
        return next(); // pass him onto the next function(controller's action)
    }
    // if user not signed in
    return res.redirect('/users/sign-in');
}
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // When we log in through the passport, the user info is already handled by the user under req.user(contains the current signed in user from the session cookie). We pass it onto the response locals ( for the views )
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;