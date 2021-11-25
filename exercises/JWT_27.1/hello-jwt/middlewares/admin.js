const admin = (req, res, next) => {
  if (!req.user.admin) next({ statusCode: 403, message: 'Restricted access' });
  next();
};
module.exports = admin;