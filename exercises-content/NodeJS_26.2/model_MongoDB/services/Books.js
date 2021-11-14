const Books = require('../models/Book')

const getAll = async () =>  await Books.getAll();

const getByAuthorId = async (id) => {
  const books = await Books.getByAuthorId(id);

  if(!books) return { error: 'notFound', message: 'Not found'};

  return books;
}

const create = async (title, author_id) => await Books.create(title, author_id);

module.exports = {
  getAll,
  getByAuthorId,
  create,
}