const { NOT_FOUND } = require('../error');
const PlantModel = require('../models/PlantModel');

const getSunny = (id) => {
  const Plant = new PlantModel();

  const plant = Plant.getItemById(id);

  if (!plant) throw NOT_FOUND;
  const { needsSun } = plant;
  if (!needsSun) return {};

  return plant;
};

module.exports = getSunny;
