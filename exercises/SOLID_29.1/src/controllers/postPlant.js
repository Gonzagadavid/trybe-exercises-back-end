const insertPlant = require('../services/insertPlant');

const postPlant = async (req, res, _next) => {
  const {
    breed, needsSun, origin, specialCare, size,
  } = req.body;

  await insertPlant({
    breed, needsSun, origin, specialCare, size,
  });

  res.status(201).json({ message: 'created' });
};
module.exports = postPlant;
