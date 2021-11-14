const messages = {
  invalid: { code: 'invalidData', message: 'CEP inválido' },
  empty: { code: 'invalidData', message: 'CEP obrigatório' },
};

const checkCep = (cep) => /^\d{5}-?\d{3}$/.test(cep);

const cepValidate = (cep) => {
  const { invalid, empty } = messages;

  if (!cep) return { error: empty };
  if (!checkCep(cep)) return { error: invalid };

  return {};
};

module.exports = cepValidate;
