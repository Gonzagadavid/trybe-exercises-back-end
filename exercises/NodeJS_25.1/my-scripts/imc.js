const readline = require('readline-sync');

const name = readline.question('What is your name? ');
const weight = readline.question('What is your weight? ');
const height = readline.question('What is your height? ');

const imc = (peso, altura) => (parseFloat(peso / (altura**2)).toPrecision(4))

console.log(imc(75, 1.8))
