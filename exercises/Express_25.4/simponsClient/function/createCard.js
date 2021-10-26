const createCard = ({ name, image, id }) => {
  const container = document.createElement('div');
  container.id = id;
  container.className = 'card'
  const title = document.createElement('h3');
  title.innerHTML = name;
  container.appendChild(title);
  const photo = document.createElement('img');
  photo.src = image;
  container.appendChild(photo);
  return container;
}

export default createCard;

