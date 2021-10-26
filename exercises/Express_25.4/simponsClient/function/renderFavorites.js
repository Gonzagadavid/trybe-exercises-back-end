import getSimpsonById from '../api/getSimpsonById.js';
import createCard from './createCard.js';

const renderFavorites = async () => {
  const favorites = JSON.parse(localStorage.getItem('simpsons')) || [];
  const content = document.getElementById('content')
  content.innerHTML = ''

  favorites.forEach( async (id) => {
    try {

      const simpson = await getSimpsonById(id);
      const card = createCard(simpson);
      content.appendChild(card);
    } catch(e) {
      console.log(e.message)
    }
  })
}

export default renderFavorites;
