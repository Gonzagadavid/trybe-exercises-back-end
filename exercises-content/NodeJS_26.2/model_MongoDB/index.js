// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');
const Books = require('./controllers/Books')

const app = express();

app.use(bodyParser.json());
app.get('/books', Books.getAll)
app.get('/books/:id', Books.getById)
app.post('/books', Books.insert)

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});