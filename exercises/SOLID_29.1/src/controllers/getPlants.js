const findPlants = require('../services/findPlants');

const getPlants = async (req, res, _next) => {
  const plants = await findPlants();

  res.status(200).json({ plants });
};

module.exports = getPlants;
