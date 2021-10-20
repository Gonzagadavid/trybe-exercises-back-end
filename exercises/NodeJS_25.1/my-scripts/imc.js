const readline = require('readline-sync');

const name = readline.question('Qual o seu nome?');
const weight = readline.questionInt('qual seu peso?');
const height = readline.questionFloat('qual sua altura? (em metros)');

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
