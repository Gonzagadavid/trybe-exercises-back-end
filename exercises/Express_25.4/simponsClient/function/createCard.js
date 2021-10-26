const addFavorite = (id, container) => {
  const favorites = JSON.parse(localStorage.getItem('simpsons')) || [];
  const favoritesAt = favorites.includes(id) ? favorites.filter((e) => +e !== +id) : [...favorites, id];
  container.style.color = favoritesAt.includes(id) ? 'yellow' : 'black';
  localStorage.setItem('simpsons', JSON.stringify(favoritesAt))
}


const createCard = ({ name, image, id }) => {
  const container = document.createElement('div');
  container.id = id;
  container.className = 'card';
  const favorites = JSON.parse(localStorage.getItem('simpsons')) || [];
  container.style.color = favorites.includes(id) ? 'yellow' : 'black';
  container.addEventListener('click', () => addFavorite(id, container));
  const title = document.createElement('h3');
  title.innerHTML = name;
  container.appendChild(title);
  const photo = document.createElement('img');
  photo.src = image;
  container.appendChild(photo);
  return container;
}

export default createCard;

