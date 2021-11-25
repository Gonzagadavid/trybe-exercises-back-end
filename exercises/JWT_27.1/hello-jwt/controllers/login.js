const jwt = require('jsonwebtoken');

const secret = 'secretToken';

const login = (req, res, next) => {
  const { username, password } = req.body;

  const admin = password === 's3nh4S3gur4???';
  try {
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const payload = {
      username,
      admin,
    };

    const token = jwt.sign(payload, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = login;
