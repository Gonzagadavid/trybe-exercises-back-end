import renderCharacters from './function/renderCharacters.js';
import renderFavorites from './function/renderFavorites.js';
import renderForms from './function/renderForms.js';

const home = document.getElementById('home');
const favorites = document.getElementById('favorites');
const addCharacter = document.getElementById('add-character');

home.addEventListener('click', renderCharacters);
favorites.addEventListener('click', renderFavorites);
addCharacter.addEventListener('click', renderForms)

renderCharacters();
