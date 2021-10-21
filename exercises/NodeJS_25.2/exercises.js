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


// callPromise(checkResultAsync)

// 4 - Utilize o arquivo simpsons.json para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

// printCharacters()

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".


// characterById(3).then((name) => console.log(name)).catch((e) => console.log(e.message))

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .


// 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .
