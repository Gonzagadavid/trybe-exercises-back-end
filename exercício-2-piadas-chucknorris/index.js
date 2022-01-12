const express = require('express');
const { getCategories, getJokeByCategory } = require('./controllers');

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', getCategories)

app.get('/jokes', getJokeByCategory)

app.get('/jokes/:category', getJokeByCategory)

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});