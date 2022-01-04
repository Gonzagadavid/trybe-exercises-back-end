const { REQUIRED_FIELDS } = require('../src/error');

const validatePlant = (req, res, next) => {
  const {
    breed, needsSun, origin, specialCare, size,
  } = req.body;

  if (!breed || !needsSun || !origin || !specialCare || !size) {
    return res.status(406).json(REQUIRED_FIELDS);
  }

  return next();
};

module.exports = validatePlant;
