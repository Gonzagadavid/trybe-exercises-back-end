const express = require('express');
const { listJokes } = require('./controllers');

const app = express();
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', listJokes)

app.listen(port, () => console.log(`Started Server in port ${port}`))