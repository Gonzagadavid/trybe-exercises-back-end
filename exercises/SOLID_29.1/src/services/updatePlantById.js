const PlantModel = require('../models/PlantModel');
const getWaterFrequency = require('./helpers/getWaterFrequncy');

const updatePlantById = (id, plant) => {
  const {
    needsSun, origin, specialCare, size,
  } = plant;
  const Plant = new PlantModel();
  const frequency = getWaterFrequency(needsSun, origin, specialCare, size);

  const plantPost = { id: +id, ...plant, specialCare: frequency };

  Plant.updateOne(id, plantPost);
};

module.exports = updatePlantById;
