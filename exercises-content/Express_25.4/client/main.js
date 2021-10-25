const content = document.getElementById('content');
const nav = document.getElementById('nav')

const getRecipes = async (url) => {
  const resp = await fetch(url);
  if (!resp.ok) console.log('falha na requisição');
  const recipes = await resp.json();
  return recipes;
}

const createTable = (array, type) => {
  const h2 = document.createElement('h2');
  h2.innerHTML = type;
  content.appendChild(h2)
  const menu = document.createElement('table');
  const thead = document.createElement('thead')
  const tr = document.createElement('tr');
  const tbody = document.createElement('tbody');
  menu.appendChild(thead);
  thead.appendChild(tr);
  menu.appendChild(tbody);
  content.appendChild(menu)

  Object.keys(array[0]).forEach((title) => {
    const th = document.createElement('th');
    th.innerHTML = title;
    tr.appendChild(th);
  })

  const addPedido = (id) => {
    const list = JSON.parse(localStorage.getItem('express')) || { Meals: [], Drinks: []};
    list[type].push(id)
    localStorage.setItem('express', JSON.stringify(list))
  }

  array.forEach((item) => {
    const trb = document.createElement('tr');
    const addBtn = document.createElement('button');
    addBtn.innerHTML = 'ADD';
    addBtn.addEventListener('click', () => addPedido(item.id));

    Object.values(item).forEach((element) => {
      const td = document.createElement('td');
      td.innerHTML = element
      trb.appendChild(td)
    })
    const tdBtn = document.createElement('td');
    tdBtn.appendChild(addBtn)
    trb.appendChild(tdBtn)
    tbody.appendChild(trb)
  })
}

const renderRecipes = async (type) => {
  const url = type === 'Meals' ? 'http://localhost:3001/recipes' : 'http://localhost:3001/drinks'
  const recipe = await getRecipes(url)
  createTable(recipe, type)
}

const btnMenu = document.createElement('button');
btnMenu.innerHTML = 'Menu'
nav.appendChild(btnMenu)

const renderMenu = () => {
  content.innerHTML = ''
  renderRecipes('Meals');
  renderRecipes('Drinks');
}

btnMenu.addEventListener('click', renderMenu)

const btnPedidos = document.createElement('button');
btnPedidos.innerHTML = 'Pedidos'
nav.appendChild(btnPedidos);

const getPedidos = async() => {
  content.innerHTML = ''
  let total = 0
  const { Meals, Drinks } = JSON.parse(localStorage.getItem('express')) || { Meals: [], Drinks: []};
  const ul = document.createElement('ul');

  Meals.forEach( async (id) => {
    const recipe = await getRecipes(`http://localhost:3001/recipes/${id}`)
    const { name, price } = recipe;
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${price}`
    ul.appendChild(li)
    total += +price
  })
  
  Drinks.forEach( async (id) => {
    const recipe = await getRecipes(`http://localhost:3001/drinks/${id}`)
    const { name, price } = recipe;
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${price}`
    ul.appendChild(li)
    total += +price
    totalPrice.innerHTML = `total$: ${total}`
  })

  content.appendChild(ul)
  const totalPrice = document.createElement('p');
  content.appendChild(totalPrice)
  
}

btnPedidos.addEventListener('click', getPedidos);