const express = require('express');
const fs = require('fs');
const auth = require('./auth');
const route = express.Router()

route.post('/', auth, (req, res, next) => {
  const { name , initials , country, league } = req.body;
  
  try {
    const { teams } = JSON.parse(fs.readFileSync('./teams.json', 'utf-8'));
    teams.push({ name , initials , country, league })
    
    fs.writeFileSync('./teams.json', JSON.stringify({ teams }));
    
    res.status(201).json({ message: `${name} was inserted successfully`});
  } catch(e) {
    next({ status: 500, message: 'post falied'})
  }
});

route.get('/', (req, res, next) => {
  try {
    const { teams } = JSON.parse(fs.readFileSync('./teams.json', 'utf-8'));
    res.status(200).json(teams)
  } catch(e) {
    next({ status: 500, message: 'post falied'})
  }
})

module.exports = route
