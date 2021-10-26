import createCard from './createCard.js';

const renderCharacters = async (rest) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  
  try {
    const simpsons = await rest();
    simpsons.forEach((simpson) => {
      const card = createCard(simpson);
      content.appendChild(card)
    })
    } catch(e) {
      console.log(e.message)
    }
}

export default renderCharacters;