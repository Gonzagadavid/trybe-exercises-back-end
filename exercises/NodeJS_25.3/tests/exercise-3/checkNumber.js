// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

const checkNumber = (num) => {
  if (typeof num !== 'number' || isNaN(num)) return 'o valor deve ser um número'
  if (!num) return 'neutro'

  return num > 0 ? 'positivo' : 'negativo'; 
};

module.exports = checkNumber;
