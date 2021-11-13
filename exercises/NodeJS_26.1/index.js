// index.js

const express = require('express');
const users = require('./models/User')
const books = require('./models/Book');
const Author = require('./models/Author');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password} = req.body;
  
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
        "error": true,
        "message": "Todos os campos são obrigatórios"
    })
  }

  if (password.length < 6) { 
    return res.status(400).json({
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }

  const checkUserExists = await users.userExists(email);

  if(checkUserExists) {
    return res.status(400).json( {
        "error": true,
        "message": "Esse e-mail já foi cadastrado"
    }) 
  }

  const user = await users.insertUser({ firstName, lastName, email, password });

  const {_id } = user

  res.status(201).json({ id: _id, firstName, lastName, email, password })
})

app.get('/books', async (req, res) => {
    const allBooks = await books.getAll();
    
    res.status(200).json(allBooks);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const booksByAuthorId = await books.getByAuthorId(id);
    
    if(!booksByAuthorId) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(booksByAuthorId);
})

app.post('/books', async (req, res) => {
    const { title, author_id} = req.body;
    const author = await Author.findById(+author_id);
    
    if (!title || !author_id || !author) return res.status(400).json({ message: 'Dados inválidos' });

    await books.create(title, author_id);

    res.status(201).json({ message: 'Livro criado com sucesso! '} );
})

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
  
    const author = await Author.findById(id);
  
    if (!author) return res.status(404).json({ message: 'Not found' });
  
    res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
