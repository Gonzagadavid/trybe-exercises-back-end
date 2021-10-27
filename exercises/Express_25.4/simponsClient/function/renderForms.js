import postSimpsons from '../api/postSimpsons.js';

const postCharacter = () => {
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const image = document.getElementById('image').value;
   
  if (!id || !name || !image) return;

  postSimpsons({ id, name, image })
}

const renderForms = () => {
  const datas = ['id' , 'name', 'image']
  const content = document.getElementById('content');
  content.innerHTML = '';
 
  datas.forEach((data) => {
    const input = document.createElement('input');
    const label = document.createElement('label');
    label.htmlFor = data;
    label.innerHTML = data;
    input.id = data;

    label.appendChild(input);
    content.appendChild(label);
  });
  

  const button = document.createElement('button');
  button.innerHTML = 'Cadastrar';
  button.addEventListener('click', postCharacter);
  content.appendChild(button);
}

export default renderForms;