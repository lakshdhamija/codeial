const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('users_profile', {
        title: "Codeial",
        name: "Laksh"
    });
}

module.exports.posts = function(req, res){
    return res.render('users_posts', {
        title: "Codeial",
        name: "Laksh",
        color: "Red"
    });
}

//render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

//Render the sign in page
module.exports.signIn = function(req, res){
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
    return res.redirect('/');
}