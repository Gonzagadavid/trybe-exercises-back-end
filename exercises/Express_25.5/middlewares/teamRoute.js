const express = require('express');
const fs = require('fs');
const auth = require('./auth');
const error = require('./error');
const { teams } = JSON.parse(fs.readFileSync('./teams.json', 'utf-8'));
const route = express.Router()

route.post('/', auth, (req, res) => {
  const { name , initials , country, league } = req.body;
  
  const { teams } = JSON.parse(fs.readFileSync('./teams.json', 'utf-8'));
  teams.push({ name , initials , country, league })

  fs.writeFileSync('./teams.json', JSON.stringify({ teams }));

  res.status(201).json({ message: `${name} was inserted successfully`});
}, error);

route.get('/', (req, res) => {
  res.status(200).json(teams)
})

module.exports = route
