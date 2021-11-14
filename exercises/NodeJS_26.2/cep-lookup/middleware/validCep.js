const cepValidate = require('../schema/cepValidate');

const validCep = (req, res, next) => {
  const { cep } = req.params;

  const { error } = cepValidate(cep);

  if (error) return next(error);

  return next();
};

module.exports = validCep;
