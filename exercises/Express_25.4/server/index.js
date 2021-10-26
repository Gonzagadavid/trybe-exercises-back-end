const express = require('express');
const cors = require('cors');

const app = express()
app.use(express.json({ type: ['application/json', 'text/plain'] }))// <---exerc 2 foi necessario adicionar os parametros 
// pois o body estava chegando vazio, outra forma valida é adicionar o bodyParser(descontinuado)

// Crie uma rota PUT /users/:name/:age . Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put('/users/:name/:age', (req, res) => {//  não funcionou no browser apena com metodo get, porem funcionou no httpie
  console.log(req.params);
  // res.set({
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // });
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  res.json({ message: 'pong' })
})

// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const { name } = req.body;
  
  res.status(201).json({ message: `Hello, ${name}!!!`});
})

// Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
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
