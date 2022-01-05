const findAll = require('../services/findAll');

const getBooks = async (_req, res, next) => {
  try {
    const books = await findAll()

    res.status(200).json({ books })

  } catch (err) {
    next(err)
  }
  
};
module.exports = getBooks;
