const readline = require('readline-sync');

const number = readline.questionInt('escolha um numero inteiro para saber seu fatorial? ');

const factorial = (number) => number === 1 || number * factorial(number - 1);

console.log(factorial(number))