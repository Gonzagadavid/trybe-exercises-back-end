const { Book } = require('../models')

const remove = async (id) => {
  const bookRemoved = await Book.destroy({ where: { id } });

  
  return bookRemoved
} 

module.exports = remove;