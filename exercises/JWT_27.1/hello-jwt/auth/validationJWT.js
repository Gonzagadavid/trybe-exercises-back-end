const jwt = require('jsonwebtoken');

const secret = 'secretToken';

const validationJWT = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return next({ statusCode: 401, message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret); 
    const { username, admin } = decoded; 
    req.user = { username, admin };
    
    next();
  } catch (err) {
    next({ statusCode: 401, message: 'Unauthorized ' });
  }
};
module.exports = validationJWT;
