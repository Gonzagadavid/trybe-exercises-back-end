const update = require('../services/update');

const putBook = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params
    const bookModify = await update(id, { title, author, pageQuantity });
    
    res.status(201).json({ message: 'successfully modified book'});
  } catch(err) {
    next(err)
  }
};
module.exports = putBook;
