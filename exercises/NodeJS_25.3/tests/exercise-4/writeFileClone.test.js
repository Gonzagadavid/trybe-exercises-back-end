const { expect } = require('chai');
const writeFileClone = require('../exercise-5/writeFileClone');
const fs = require('fs');
const sinon = require('sinon');
// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

// Exercício 5 Implemente a função descrita no exercício 4.
// Crie a função descrita no exercício 4 utilizando o módulo fs do node.
// Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
// Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.

sinon.stub(fs, 'writeFileSync')

describe('exercicio 4 e 5', () => {
  it('verifica se ao passar o nome do arquivo e o conteudo retorna "ok"', () => {
    expect(writeFileClone('teste.txt', 'usando mocha chai para testes')).equal('ok');
  });

  it('verifica se ao não passar o nome do arquivo retorna "passe o nome do arquivo primeiro parametro"', () => {
    expect(writeFileClone(null, 'usando mocha chai para testes')).equal('passe o nome do arquivo primeiro parametro');
  })

  it('verifica se não passar o conteudo retorna, "passe o conteudo a ser escrito como segundo parametro"', () => {
    expect(writeFileClone('teste.txt')).equal('passe o conteudo a ser escrito como segundo parametro');
  })
})
