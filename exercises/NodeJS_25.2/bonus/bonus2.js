// 2 - Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// Leia o arquivo.
// Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// Caso o arquivo exista, solicite a palavra a ser substituída.
// Solicite a nova palavra, que substituirá a palavra anterior.
// Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// Pergunte o nome do arquivo de destino.
// Salve o novo arquivo no caminho de destino.
const readline = require('readline-sync');
const fs = require('fs');

const changeWord =  () => {
  const file = readline.question('Qual arquivo você gostaria de alterar palavras? ');
  const fileDist = readline.question('Como deseja nomear o arquivo com a palavra alterada? ');
  const oldWord = readline.question('Qual palavra deseja alterar? ');
  const newWord = readline.question('Qual palavra deseja usar? ');
  const regWord = new RegExp(oldWord, 'g');
  const oldFile = fs.readFileSync(file, 'utf8');
  const newFile = oldFile.replace(regWord, newWord);
  console.log(newFile)
  if (readline.keyInYN('confirmar')) fs.writeFileSync(fileDist, newFile);
}

changeWord();
