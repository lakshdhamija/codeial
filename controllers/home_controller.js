const Posts = require('../models/post');
module.exports.home = function(req, res){
    //console.log(req.cookies);
    //res.cookie('user_id', 25);
    // Posts.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts: posts
    //     });
    // });

    // populate user of each post
    Posts.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts
        });
    });
}