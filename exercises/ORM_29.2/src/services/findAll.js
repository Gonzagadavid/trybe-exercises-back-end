const { Book } = require('../models')

const findAll = async () => {
  const books = await Book.findAll();

  return books
} 

module.exports = findAll;
