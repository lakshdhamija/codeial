module.exports.profile = function(req, res){
    return res.render('users_profile', {
        title: "Codeial",
        name: "Laksh"
    });
}