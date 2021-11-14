const Cep = require('../models/Cep');
const cepValid = require('./cepValid');

const insertCep = async ({
  cep, logradouro, bairro, localidade, uf,
}) => {
  const validCep = cepValid(cep);
  await Cep.insertCep([validCep, logradouro, bairro, localidade, uf]);
};
module.exports = insertCep;
