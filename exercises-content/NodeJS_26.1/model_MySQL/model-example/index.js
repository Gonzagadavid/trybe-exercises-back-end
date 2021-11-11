// index.js

const express = require('express');
const books = require('./models/Book');
const Author = require('./models/Author');

const app = express();


app.get('/books', async (req, res) => {
    const allBooks = await books.getAll();

    res.status(200).json(allBooks);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const booksByAuthorId = await books.getByAuthorId(id);

    res.status(200).json(booksByAuthorId);
})

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
