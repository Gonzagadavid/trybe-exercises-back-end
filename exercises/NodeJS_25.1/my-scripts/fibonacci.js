const readline = require('readline-sync');

const number = readline.questionInt('escolha um numero de elemento fiboncci? ');

const fibonacci = (limit, a = 0, b = 1, arr=[]) => arr.length === limit ? arr : fibonacci(limit, b, (a + b), [...arr, b]);


console.log(fibonacci(number));
