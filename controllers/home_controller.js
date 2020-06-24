const Posts = require('../models/post');
const User = require('../models/user'); // requiring as we need to display list of users on home page
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
    Posts.find({})
    .populate('user') // populating user in posts to display user name who made post
    .populate({
        path: 'comments', // (name specified according to post.js model) populating comments to display comment
        populate: {
            path: 'user' // populating user in comments to display user name who made comment
        }
    })
    .exec(function(err, posts){
        User.find({}, function(err, users){
            return res.render('home', {
                title: "Codeial | Home",
                posts: posts,
                all_users: users
            });
        });
        
    });
}