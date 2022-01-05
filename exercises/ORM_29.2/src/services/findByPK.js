const { Book } = require('../models')

const findByPk = async (id) => {
  const book = await Book.findByPk(id);

  if(!book) throw { status: 404, message: 'not found' };

  return book
} 

module.exports = findByPk;