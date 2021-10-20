// Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// A fórmula para calcular o IMC é peso / altura ^ 2 .
// Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
// Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
// Armazene o script no arquivo imc.js .
// Agora, permita que o script seja executado através do comando npm run imc
// O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .
// Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
// Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
// Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
// Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
// Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .
// Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
// Considere a seguinte tabela para classificar a situação do IMC:
// Copiar
// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |

const readline = require('readline-sync');

const name = readline.question('Qual o seu nome? ');
const weight = readline.questionInt('qual seu peso? ');
const height = readline.questionFloat('qual sua altura? (em metros) ');

const imc = (peso, altura) => {
  const calc = parseFloat(peso / (altura**2)).toPrecision(4);
  if (calc < 18.5) return `${calc}, Abaixo do peso (magreza)`;
  if (calc < 25) return `${calc}, Peso normal`;
  if (calc < 30) return `${calc}, Acima do peso (sobrepeso)`;
  if (calc < 35) return `${calc}, Obesidade grau I`;
  if (calc < 40) return `${calc}, Obesidade grau II`;
  return `${calc}, Obesidade graus III e IV`;
}

console.log(`Olá ${name}! seu imc é de ${imc(weight, height)}`)
