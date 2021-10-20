const readline = require('readline-sync');

const options = ['imc', 'velocidade', 'sorteio'];
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
}