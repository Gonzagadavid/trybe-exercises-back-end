const cepFormat = require('./cepFormat');
const findCep = require('./findCep');

const getCep = async (cepParam) => {
  const date = await findCep(cepParam);
  const { cep, ...rest } = date;

  if (!date) return { error: { code: 'notFound', message: 'CEP não encontrado' } };

  return { cep: cepFormat(cep), ...rest };
};

module.exports = getCep;
