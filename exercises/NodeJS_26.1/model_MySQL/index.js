// index.js

const express = require('express');
const bodyParser = require('body-parser');
const users = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.get('/user', async (req, res) => {
  const allUser = await users.allUsers();
  res.status(200).json(allUser);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await users.userById(id);

  if (!user) {
    res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const {
    firstName, lastName, email, password,
  } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Todos os campos são obrigatórios',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }

  const user = await users.userById(id);

  if (!user) {
    res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  const userUpdated = [
    firstName, lastName, email, password,
  ];

  await users.updateUser(id, userUpdated);
  const userUp = await users.userById(id);

  return res.status(200).json(userUp);
});

app.post('/user', async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Todos os campos são obrigatórios',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }

  const checkUserExists = await users.findUser(email);

  if (checkUserExists.length) {
    return res.status(400).json({
      error: true,
      message: 'Esse e-mail já foi cadastrado',
    });
  }

  await users.insertUser([
    firstName, lastName, email, password,
  ]);

  const userSave = await users.findUser(email);
  return res.status(201).json(userSave);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  global.console.log(`Ouvindo a porta ${PORT}`);
});
