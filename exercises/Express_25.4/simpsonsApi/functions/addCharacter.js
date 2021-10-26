const fs = require('fs');
const getSimpsons = require('./getSimpsons');
const path = require('path');
const simpsonsFile = path.join('..', 'simpsonsApi','simpsons.json');

const addCharacter = (character) => {
  const simpsons = getSimpsons();

  simpsons.push(character);

  fs.writeFileSync(simpsonsFile, JSON.stringify(simpsons));

}

module.exports = addCharacter;