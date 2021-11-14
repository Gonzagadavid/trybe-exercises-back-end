const getCep = require('../services/getCep');

const getByCep = async (req, res, next) => {
  const { cep } = req.params;
  const date = await getCep(cep);
  const { error } = date;

  if (error) return next(error);

  return res.status(200).json(date);
};

module.exports = getByCep;
