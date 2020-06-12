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