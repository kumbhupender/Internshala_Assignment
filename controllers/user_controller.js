module.exports.user = function(req , res) {
    return res.render('user',{
        title : 'User Page'
    });
}


module.exports.create = function(req , res) {
    return res.redirect('/users/profile');
}