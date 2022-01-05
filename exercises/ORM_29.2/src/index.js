const express = require('express');
const error = require('./middleware/error');
require('dotenv').config();

const books = require('./routes/books');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/books', books);

app.use(error)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;