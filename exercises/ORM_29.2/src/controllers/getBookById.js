const findByPk = require('../services/findByPK');

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await findByPk(id);

    res.status(200).json(book)
  } catch(err) {
    next(err)
  }
};
module.exports = getBookById;
