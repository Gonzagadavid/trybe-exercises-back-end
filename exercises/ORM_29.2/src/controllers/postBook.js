const create = require('../services/create');

const postBook = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const bookCreated = await create({ title, author, pageQuantity });
    
    res.status(201).json(bookCreated);
  } catch(err) {
    next(err)
  }
};
module.exports = postBook;
