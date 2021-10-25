const content = document.getElementById('content');

const getRecipes = async () => {
  const resp = await fetch('http://localhost:3001/recipes');
  if (!resp.ok) console.log('falha na requisição');
  const recipes = await resp.json();
  return recipes;
}

const renderRecipes = async () => {
  const recipes = await getRecipes();
  const menu = document.createElement('table');
  const thead = document.createElement('thead')
  const tr = document.createElement('tr');
  const tbody = document.createElement('tbody');
  menu.appendChild(thead);
  thead.appendChild(tr);
  menu.appendChild(tbody);
  content.appendChild(menu)
  const titles =  ['numero', 'Prato', 'Preço', 'Tempo de preparo']
  titles.forEach((title) => {
    console.log(title)
    const th = document.createElement('th');
    th.innerHTML = title;
    tr.appendChild(th);
  })
  recipes.forEach((item) => {
    const trb = document.createElement('tr');
     Object.values(item).forEach((element) => {
       const td = document.createElement('td');
       td.innerHTML = element
       trb.appendChild(td)
    })
    tbody.appendChild(trb)
  })

}

renderRecipes()
