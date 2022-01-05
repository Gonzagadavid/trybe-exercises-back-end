const { Router } = require('express');
const deleteBook = require('../controllers/deleteBook');
const getBookById = require('../controllers/getBookById');
const getBooks = require('../controllers/getBooks');
const postBook = require('../controllers/postBook');
const putBook = require('../controllers/putBook');

const route = Router()

route.get('/', getBooks)

route.get('/:id', getBookById)

route.post('/', postBook)

route.post('/:id', putBook)

route.delete('/:id', deleteBook)

module.exports = route
