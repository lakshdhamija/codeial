const Posts = require('../models/post');
const User = require('../models/user'); // requiring as we need to display list of users on home page
module.exports.home = async function(req, res){
    // populate user of each post
    try{
        let posts = await Posts.find({})
        .populate('user') // populating user in posts to display user name who made post
        .populate({
            path: 'comments', // (name specified according to post.js model) populating comments to display comment
            populate: {
                path: 'user' // populating user in comments to display user name who made comment
            }
        });

        let users = await User.find({});

        return res.render('home', {
            title: "Codeial | Home",
            posts: posts,
            all_users: users
        });
    }catch(err){
        console.log('Error', err);
        return;
    }
}