const express = require('express');
const cors = require('cors');

const app = express()
app.use(express.json({ type: ['application/json', 'text/plain'] }))// <---exerc 2 foi necessario adicionar os parametros 
// pois o body estava chegando vazio, outra forma valida é adicionar o bodyParser(descontinuado)

app.get('/ping', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  res.json({ message: 'pong' })
})

app.post('/hello', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const { name } = req.body;
  
  res.status(201).json({ message: `Hello, ${name}!!!`});
})

app.post('/greetings', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const { name, age } = req.body;
  
  if (age < 17) return res.status(401).json({ message: "Unauthorized" })

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.listen(3500, () => { console.log('servidor rodando na porta 3500')});

app.use(cors)
