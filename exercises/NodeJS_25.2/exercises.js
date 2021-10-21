const fs = require('fs');
// 1 - Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
const checkNum = (arr) => arr.reduce((acc, crr) => acc && typeof crr === 'number', true); 

const checkResult = (a, b, c) => new Promise((resolve, reject) => {
  if (!checkNum([a, b, c])) reject( new Error('Informe apenas números'));
  
  const result = (a + b) * c;

  result < 50 ? reject(new Error('Valor muito baixo')) : resolve(result)
})



// 2 - Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
const callPromise = (callback) => {
  const randomNumber = () => Math.floor(Math.random() * 10 + 1);
  
  const numberGenerate = () => Array(3).fill(0).map(() => randomNumber());
  
  callback(...numberGenerate())
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message))
}

// callPromise(checkResult)

// 3 - Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .
const checkResultAsync = async (a, b, c) => {
  const isNumber = await !checkNum([a, b, c])
  if (isNumber) throw new Error('Informe apenas números');
  
  const result = (a + b) * c;

  if (result < 50) throw new Error('Valor muito baixo')
  
  return result
};

// callPromise(checkResultAsync)

// 4 - Utilize o arquivo simpsons.json para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// 4.1 Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const printCharacters = () => {
  try {
    const characters = fs.readFileSync('simpsons.json', 'utf8');
    JSON.parse(characters).forEach(({ id, name }) => console.log(`${id} - ${name}`))
  } catch(err) {
    console.log(err.message)
  }
}
// printCharacters()

// 4.2 Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const characterById = (_id) => new Promise((resolve, reject) => {
  const characters = fs.readFileSync('simpsons.json', 'utf8');
  const selected = JSON.parse(characters).find(({ id }) => +id === +_id);
  if(!selected) reject(new Error('id não encontrado'));
  resolve(selected.name)
})

// characterById(3).then((name) => console.log(name)).catch((e) => console.log(e.message))

// 4.3Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const removeItemByIds = (arrId) => {
  const characters = fs.readFileSync('simpsons.json', 'utf8');
  const newChar = JSON.parse(characters).filter(({ id }) => !arrId.includes(+id));
  fs.promises.writeFile('./simpsons.json', JSON.stringify(newChar))
    .then(() => console.log('arquivo escrito com sucesso'))
    .catch((e) => console.log(e.message))
} 

// removeItemByIds([10, 6])

// 4.4 Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const getItemByIds = (arrId) => {
  const characters = fs.readFileSync('simpsons.json', 'utf8');
  const newChar = JSON.parse(characters).filter(({ id }) => arrId.includes(+id));
  fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(newChar))
    .then(() => console.log('arquivo escrito com sucesso'))
    .catch((e) => console.log(e.message))
} 

// getItemByIds([1, 4])

// 4.5 Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
const addItemByName = (_name) => {
  const getCharacter = fs.readFileSync('simpsons.json', 'utf8');
  const postCharacter = fs.readFileSync('simpsonFamily.json', 'utf8');
  const newChar = JSON.parse(getCharacter).filter(({ name }) => name === _name);
  const newCharacters = [...JSON.parse(postCharacter), ...newChar]
  fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(newCharacters))
    .then(() => console.log('arquivo escrito com sucesso'))
    .catch((e) => console.log(e.message))
} 

// addItemByName('Nelson Muntz');

// 4.6 Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
const alterItemByNames = (_name, newName) => {
  const getCharacter = fs.readFileSync('simpsons.json', 'utf8');
  const postCharacter = fs.readFileSync('simpsonFamily.json', 'utf8');
  const newChar = JSON.parse(getCharacter).filter(({ name }) => name === newName);
  const newCharacters = [...JSON.parse(postCharacter).filter(({ name }) => name !== _name), ...newChar]
  fs.promises.writeFile('./simpsonFamily.json', JSON.stringify(newCharacters))
    .then(() => console.log('arquivo escrito com sucesso'))
    .catch((e) => console.log(e.message))
} 

alterItemByNames('Nelson Muntz', 'Maggie Simpson');

// 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .
