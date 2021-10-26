import createCard from './createCard.js';
import getSimpsons  from '../api/getSimpesons.js';

const renderCharacters = async () => {
  const content = document.getElementById('content');
  content.innerHTML = '';

  try {
    const simpsons = await getSimpsons();
    simpsons.forEach((simpson) => {
      const card = createCard(simpson);
      content.appendChild(card)
    })
    } catch(e) {
      console.log(e.message)
    }
}

export default renderCharacters;