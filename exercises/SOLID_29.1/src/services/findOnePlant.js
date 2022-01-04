const { NOT_FOUND } = require('../error');
const PlantModel = require('../models/PlantModel');

const findOnePlant = (id) => {
  const Plant = new PlantModel();

  const plant = Plant.getItemById(id);

  if (!plant) throw NOT_FOUND;

  return plant;
};

module.exports = findOnePlant;
