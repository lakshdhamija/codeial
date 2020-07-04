const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req, res){
    let posts = await Post.find({})
        .sort('-createdAt')
        .populate('user') // populating user in posts to display user name who made post
        .populate({
            path: 'comments', // (name specified according to post.js model) populating comments to display comment
            populate: {
                path: 'user' // populating user in comments to display user name who made comment
            }
        });
    return res.json(200, {
        message: "List of posts",
        posts: posts
    });
}

module.exports.destroy = async function(req, res){
    try{
        let post = await Post.findById(req.params.id);
        if(post.user == req.user.id){ //.id used instead of ._id as .id will convert id to string
            post.remove();
            await Comment.deleteMany({post: req.params.id});
            return res.json(200, {
                message: "Post and associated comments deleted successfully"
        });
        }else{
            return res.json(401, {
                message: 'You cannot delete this Post'
            });
        }
    }catch(err){
        console.log(err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}