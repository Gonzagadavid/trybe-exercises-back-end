/* index.js */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 45.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  recipes.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
  res.json(recipes);
});

// Crie uma array drinks com os seguintes obejtos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
// Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (req, res) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  drinks.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
  res.json(drinks);
});

// Modifique o código da nossa rota para que ela receba um terceiro parâmetro através de query string
// com o atributo minPrice e modifique o filter para trazer apenas os receitas onde o valor da receita seja 
// maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.
// Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.

const maxPriceFilter = (array, price) => array.filter((rec) => rec.price < parseInt(price))
const minPriceFilter = (array, price) => array.filter((rec) => rec.price >= parseInt(price))
const nameSelected = (array, name) => array.filter((rec) => rec.name.includes(name))

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  let filteredRecipes = [...recipes];
  if (name) filteredRecipes = nameSelected(filteredRecipes, name);
  if (maxPrice) filteredRecipes =  maxPriceFilter(filteredRecipes, maxPrice);
  if (minPrice) filteredRecipes = minPriceFilter(filteredRecipes, minPrice);

  res.status(200).json(filteredRecipes);
})

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  let filteredDrinks = [...drinks];
  if (name) filteredDrinks = nameSelected(filteredDrinks, name);
  if (maxPrice) filteredDrinks =  maxPriceFilter(filteredDrinks, maxPrice);
  if (minPrice) filteredDrinks = minPriceFilter(filteredDrinks, minPrice);

  res.status(200).json(filteredDrinks);
})

// Observação: Quando houver rotas com um mesmo radical e uma destas utilizar parâmetro de rota, 
//as rotas mais específicas devem ser definidas sempre antes. Isso porque o Express ao resolver uma rota vai 
// olhando rota por rota qual corresponde a URL que chegou. Se colocamos a rota /recipes/search depois 
// da rota /recipes/:id , o Express vai entender que a palavra search como um id e vai chamar a callback 
// da rota /recipes/:id . Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API.


app.get('/recipes/:id', function (req, res) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// Crie uma rota GET /drink/:id para retornar uma bebida pelo id .

app.get('/drinks/:id', function (req, res) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.use(cors);
