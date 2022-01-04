const PlantModel = require('../models/PlantModel');

const findPlants = () => {
  const Plants = new PlantModel();
  const plants = Plants.getDb();
  return plants;
};

module.exports = findPlants;
