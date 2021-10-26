import renderCharacters from './function/renderCharacters.js';
import renderFavorites from './function/renderFavorites.js';

const home = document.getElementById('home')
const favorites = document.getElementById('favorites')

home.addEventListener('click', renderCharacters)

favorites.addEventListener('click', renderFavorites)

// renderCharacters(getSimpsons)
