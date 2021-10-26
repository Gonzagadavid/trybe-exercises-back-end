const fs = require('fs');
const path = require('path');
const simpsonsFile = path.join('..', 'simpsonsApi','simpsons.json')

const getSimpsons = () => {
  try {
    const simpsons = fs.readFileSync(simpsonsFile, 'utf8')
     return JSON.parse(simpsons)
  } catch(e) {
    console.log(e.message)
  }

}

module.exports = getSimpsons