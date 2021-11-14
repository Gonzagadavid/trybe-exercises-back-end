const Cep = require('../models/Cep');
const cepValid = require('./cepValid');
const cepFormat = require('./cepFormat');

const getCep = async (cepParam) => {
  const validCep = cepParam.length > 8 ? cepValid(cepParam) : cepParam;
  const [date] = await Cep.getDateByCep(validCep);
  const { cep, ...rest } = date;

  if (!date) return { error: { code: 'notFound', message: 'CEP não encontrado' } };

  return { cep: cepFormat(cep), ...rest };
};

module.exports = getCep;
