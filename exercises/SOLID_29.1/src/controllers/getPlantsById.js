const findOnePlant = require('../services/findOnePlant');

const getPlantById = async (req, res, _next) => {
  const { id } = req.params;
  try {
    const plant = await findOnePlant(id);
    res.status(200).json(plant);
  } catch (err) {
    res.status(404).json(err);
  }
};
module.exports = getPlantById;
