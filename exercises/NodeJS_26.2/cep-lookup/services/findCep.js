const Cep = require('../models/Cep');
const cepValid = require('./cepValid');

const findCep = async (cep) => {
  const validCep = cep.length > 8 ? cepValid(cep) : cep;
  const [cepFound] = await Cep.getDateByCep(validCep);
  return cepFound;
};

module.exports = findCep;
