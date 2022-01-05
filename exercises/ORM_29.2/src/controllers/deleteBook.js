const remove = require('../services/remove');

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookRemoved = await remove(id);
    
    res.status(202).json({ message: 'successfully removed book'});
  } catch(err) {
    next(err)
  }
};

module.exports = deleteBook;
