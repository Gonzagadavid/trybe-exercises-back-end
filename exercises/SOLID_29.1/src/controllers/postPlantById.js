const updatePlantById = require('../services/updatePlantById');

const postPlantById = async (req, res, _next) => {
  const {
    breed, needsSun, origin, specialCare, size,
  } = req.body;
  const { id } = req.params;

  await updatePlantById(id, {
    breed, needsSun, origin, specialCare, size,
  });

  res.status(202).json({ message: 'modified' });
};
module.exports = postPlantById;
