const { Book } = require('../models')

const create = async (book) => {
  const bookCreated = await Book.create(book);

  return bookCreated
} 

module.exports = create;