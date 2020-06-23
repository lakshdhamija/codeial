const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: { // linking to user Schema already in database
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // specifying schema to which we will refer
    },
    // include array of ids of all comments in the post schema itself
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},{
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;