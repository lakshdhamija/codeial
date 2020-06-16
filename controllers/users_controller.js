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
    //TODO later
}

//sign in and create session for user
module.exports.createSession = function(req, res){
    //TODO later
}