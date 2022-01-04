const getSunnyService = require('../services/getSunny');

const getSunny = async (req, res, _next) => {
  const { id } = req.params;
  try {
    const plant = await getSunnyService(id);
    res.status(200).json(plant);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = getSunny;
