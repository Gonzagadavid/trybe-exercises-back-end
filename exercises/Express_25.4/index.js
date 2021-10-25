const express = require('express');

const app = express()

app.get('/ping', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  res.json({ message: 'pong' })
})

app.listen(3500, () => { console.log('servidor rodando na porta 3500')})