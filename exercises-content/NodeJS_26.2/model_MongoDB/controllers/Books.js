const Joi = require('joi');
const Books = require('../services/Books');
const rescue = require('express-rescue');

const getAll = rescue(async (req, res, next) => {
  const allBooks = await Books.getAll();
  
  res.status(200).json(allBooks);
})

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const booksByAuthorId = await Books.getByAuthorId(id);
  
  if(booksByAuthorId.error) return next(booksByAuthorId);

  res.status(200).json(booksByAuthorId);
})

const insert = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty().required(),
  }).validate(req.body);

  if (error) {
    return next(error);
  }
  
  const { title, author_id} = req.body;
  
  await Books.create(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '} );
})

module.exports = {
  getAll,
  getById,
  insert
}