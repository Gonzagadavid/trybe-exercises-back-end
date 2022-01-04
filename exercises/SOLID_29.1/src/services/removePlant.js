const PlantModel = require('../models/PlantModel');

const removePlant = (id) => {
  const Plant = new PlantModel();

  const plant = Plant.removeItem(id);

  return plant;
};

module.exports = removePlant;
