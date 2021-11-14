const { Router } = require('express');
const getByCep = require('../controllers/getByCep');
const validCep = require('../middleware/validCep');
const validFields = require('../middleware/validFields');

const router = Router();

router.get('/:cep', validCep, getByCep);

router.post('/', validFields);

module.exports = router;
