const express = require('express');
const getSimpsons = require('./functions/getSimpsons');
const cors = require('cors');
const addCharacter = require('./functions/addCharacter');

const app = express();
app.use(express.json())
// Crie um endpoint GET /simpsons O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const simpsons = getSimpsons();
  res.status(200).json(simpsons);
})

// Crie um endpoint GET /simpsons/:id O endpoint deve retornar o personagem com o id informado na URL da requisição.
//  Caso não exista nenhum personagem com o id especificado, retorne o JSON `{ message: 'simpson not found' }` com o status
//   404 - Not Found .
app.get('/simpsons/:id', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  const { id } = req.params;
  const simpsons = getSimpsons();
  const character = simpsons.find(({ id: idSearch }) => idSearch === id);

  if (!character) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(character)
})


// Crie um endpoint POST /simpsons . Este endpoint deve cadastrar novos personagens. O corpo da requisição deve 
// receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } . 
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } 
// com o status 409 - Conflict . Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e 
// devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você 
// pode utilizar res.status(204).end(); .
app.post('/simpsons', (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  const { id, name, image } = req.body;
  const simpsons = getSimpsons();
  const check = simpsons.some(({ id: idSearch }) => idSearch === id);
  
  if (check) return res.status(409).json({ message: 'id already exists' } );
  
  if (!id || !name || !image) return  res.status(400).json({ message: 'incomplete information'});

  try {
    addCharacter({ id, name, image });
    res.status(204).end();
  } catch {
    res.status(500).end()
  }
})

app.listen(5300, () => { console.log('server rodando na porta 5300')});
app.use(cors)
