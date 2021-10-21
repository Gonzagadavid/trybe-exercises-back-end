// 1 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.
const readline = require('readline-sync');
const fs = require('fs');

const printFile =  () => {
  const file = readline.question('Qual arquivo você gostaria de ler? ');
    
  fs.readFile(`../exercises/${file}`, 'utf-8', (error, content) => {
    if(error) return console.log('Arquivo inexistente');

    console.log(content)
  })

}

printFile();