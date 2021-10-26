const express = require('express');
const app = express()
const route = require('./middlewares/teamRoute');

app.use(express.json())

app.use('/teams', route);


app.listen(5300, () =>  console.log('servidor rodadndo na porta 5300'))