import getSimpsons  from './api/getSimpesons.js';
import renderCharacters from './function/renderCharacters.js';
const home = document.getElementById('home')

home.addEventListener('click', renderCharacters(getSimpsons))


// renderCharacters(getSimpsons)
