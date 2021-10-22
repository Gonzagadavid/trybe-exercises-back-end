const { expect } = require('chai');
const checkNumber = require('../exercise-2/checkNumber');

// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

describe('exercicio 1 e 2', () => {
  describe('verifica se a função retorna', () => {
    it('"positivo" ao receber um numero maior que zero', () => {
      expect(checkNumber(1)).equal('positivo');
      expect(checkNumber(15)).equal('positivo');
      expect(checkNumber(24)).equal('positivo');
      expect(checkNumber(50)).equal('positivo');
    });

    it('"negativo" ao receber um numero menor que zero', () => {
      expect(checkNumber(-1)).equal('negativo');
      expect(checkNumber(-15)).equal('negativo');
      expect(checkNumber(-24)).equal('negativo');
      expect(checkNumber(-50)).equal('negativo');
    });

    it('"neutro" ao receber zero', () => {
      expect(checkNumber(0)).equal('neutro')
    });
  });
});
