const content = document.getElementById('content');

const getRecipes = async (url) => {
  const resp = await fetch(url);
  if (!resp.ok) console.log('falha na requisição');
  const recipes = await resp.json();
  return recipes;
}

const createTable = (array, titleRecipe) => {
  const h2 = document.createElement('h2');
  h2.innerHTML = titleRecipe;
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
  
  array.forEach((item) => {
    const trb = document.createElement('tr');
     Object.values(item).forEach((element) => {
       const td = document.createElement('td');
       td.innerHTML = element
       trb.appendChild(td)
    })
    tbody.appendChild(trb)
  })
}

const renderRecipes = async (type) => {
  const url = type === 'Meals' ? 'http://localhost:3001/recipes' : 'http://localhost:3001/drinks'
  const recipe = await getRecipes(url)
  createTable(recipe, type)
}

renderRecipes('Meals');
renderRecipes('Drinks');
