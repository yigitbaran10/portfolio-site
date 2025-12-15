module.exports = function ensureAdmin(req, res, next) {
    if (req.session.user) return next();
    res.redirect('/admin/login');
};
