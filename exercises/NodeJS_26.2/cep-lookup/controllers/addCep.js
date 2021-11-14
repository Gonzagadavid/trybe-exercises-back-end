const findCep = require('../services/findCep');
const getCep = require('../services/getCep');
const insertCep = require('../services/insertCep');

const addCep = async (req, res, next) => {
  const {
    cep, logradouro, bairro, localidade, uf,
  } = req.body;

  const cepExist = await findCep(cep);

  if (cepExist) return next({ code: 'alreadyExists', message: 'CEP já existente' });

  await insertCep({
    cep, logradouro, bairro, localidade, uf,
  });

  const cepSave = await getCep(cep);

  return res.status(201).json(cepSave);
};

module.exports = addCep;
