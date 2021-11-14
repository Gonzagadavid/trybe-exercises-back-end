const { string } = require('joi');
const Joi = require('joi');

const getMessage = ({ details: [{ message }] }) => message;

const validFields = (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().not().empty().regex(/^\d{5}-\d{3}$/)
      .messages({ 'string.pattern.base': 'cep format invalid' })
      .required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) return next({ code: 'invalidData', message: getMessage(error) });

  return next();
};

module.exports = validFields;
