const { Router } = require('express');
const getByCep = require('../controllers/getByCep');
const validCep = require('../middleware/validCep');

const router = Router();

router.get('/:cep', validCep, getByCep);

module.exports = router;
