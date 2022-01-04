const { Router } = require('express');
const validatePlant = require('../../middlewares/validatePlant');
const deletePlant = require('../controllers/deletePlant');
const getPlants = require('../controllers/getPlants');
const getPlantById = require('../controllers/getPlantsById');
const getSunny = require('../controllers/getSunny');
const postPlant = require('../controllers/postPlant');
const postPlantById = require('../controllers/postPlantById');

const route = Router();

route.get('/plants', getPlants);
route.get('/plant/:id', getPlantById);
route.delete('/plant/:id', deletePlant);
route.post('/plant', validatePlant, postPlant);
route.post('/plant/:id', validatePlant, postPlantById);
route.get('/sunny/:id', getSunny);

module.exports = route;
