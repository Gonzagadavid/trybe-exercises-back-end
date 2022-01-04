const removePlant = require('../services/removePlant');

const deletePlant = async (req, res, _next) => {
  const { id } = req.params;

  await removePlant(id);

  res.status(204).json({ message: 'item removed' });
};
module.exports = deletePlant;
