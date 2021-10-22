const { expect } = require('chai');
const writeFile = require('../exercise-5/writeFile');

// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

describe('exercicio 4', () => {
  it('verifica se ao passar o nome do arquivo e o conteudo retorna "ok"', () => {
    expect(writeFile('teste.txt', 'usando mocha chai para testes')).equal('ok');
  });

  it('verifica se ao não passar o nome do arquivo retorna "passe o nome do arquivo primeiro parametro"', () => {
    expect(writeFile(null, 'usando mocha chai para testes')).equal('passe o nome do arquivo primeiro parametro');
  })

  it('verifica se não passar o conteudo retorna, "passe o conteudo a ser escrito como segundo parametro"', () => {
    expect(writeFile('teste.txt')).equal('passe o conteudo a ser escrito como segundo parametro');
  })
})
