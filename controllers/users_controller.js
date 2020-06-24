const User = require('../models/user');

module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('users_profile', {
            title: "Codeial | User Profile",
            profile_user: user
        });
    });
}

//render the sign up page
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

//Render the sign in page
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}

//get the sign up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, function(err, user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){ // if user doesn't exist, create user
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{ // if user exists then redirect to sign up page
            return res.redirect('back');     
        }
    });
}

//sign in and create session for user
module.exports.createSession = function(req, res){
    return res.redirect('/users/profile');
}

module.exports.destroySession = function(req, res){
    req.logout(); // this function is inbuilt in passport.js
    return res.redirect('/');
}