const errorCode = {
  invalidData: 400,
  notFound: 404,
};

const error = (err, req, res, _next) => {
  const status = errorCode[err.code] || 500;
  const message = err.message || 'internal error';

  res.status(status).json({ message });
};

module.exports = error;
