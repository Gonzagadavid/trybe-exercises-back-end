const PlantModel = require('../models/PlantModel');
const getWaterFrequency = require('./helpers/getWaterFrequncy');

const insertPlant = (plant) => {
  const {
    needsSun, origin, specialCare, size,
  } = plant;
  const Plant = new PlantModel();
  const frequency = getWaterFrequency(needsSun, origin, specialCare, size);

  const plantPost = { ...plant, specialCare: frequency };

  Plant.insertOne(plantPost);
};

module.exports = insertPlant;
