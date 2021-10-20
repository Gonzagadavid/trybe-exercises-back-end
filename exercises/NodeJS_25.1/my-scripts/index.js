const readline = require('readline-sync');

const options = ['imc', 'velocidade', 'sorteio', 'fatorial', 'fibonacci'];
const selected = readline.keyInSelect(options, 'o que deseja executar?');

switch(selected) {
  case 0: 
    require('./imc')
    break;
  
  case 1:
    require('./velocidade')
    break;
    
  case 2 :
    require('./sorteio')
    break;

  case 3 :
    require('./fatorial')
    break;

  case 4 :
    require('./fibonacci')
    break;
}