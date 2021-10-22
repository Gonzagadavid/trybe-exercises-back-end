const { expect } = require('chai');
const checkNumber = require('./checkNumber');

// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

describe('exercicio 3', () => {
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

    it('"o valor deve ser um número", ao receber tipo diferente de number', () => {
      expect(checkNumber('1')).equal('o valor deve ser um número');
      expect(checkNumber('abC')).equal('o valor deve ser um número');
      expect(checkNumber(true)).equal('o valor deve ser um número');
      expect(checkNumber(false)).equal('o valor deve ser um número');
      expect(checkNumber(null)).equal('o valor deve ser um número');
      expect(checkNumber(undefined)).equal('o valor deve ser um número');
      expect(checkNumber(NaN)).equal('o valor deve ser um número');
      expect(checkNumber([])).equal('o valor deve ser um número');
      expect(checkNumber({})).equal('o valor deve ser um número');
    })

  });
});
