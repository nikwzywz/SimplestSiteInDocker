function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).redirect('/login.html');
  }
  next();
}

module.exports = requireAuth; 