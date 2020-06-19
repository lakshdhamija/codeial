const Posts = require('../models/posts');
module.exports.home = function(req, res){
    //console.log(req.cookies);
    //res.cookie('user_id', 25);
    Posts.find({}, function(err, posts){
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts
        });
    });
    
}