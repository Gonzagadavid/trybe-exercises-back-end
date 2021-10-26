const express = require('express');
const error = require('./middlewares/error');
const app = express()
const route = require('./middlewares/teamRoute');

app.use(express.json())


app.use('/teams', route);

app.use(error);

app.listen(5300, () =>  console.log('servidor rodadndo na porta 5300'))