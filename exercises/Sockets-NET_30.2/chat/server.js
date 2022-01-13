const { sum, sub, div, mult } = require('./operations')

const operations = { '+': sum, '-': sub, '/': div, '*' :mult }
/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  // escuta do cliente
  connection.on('data', (data) => {
    const [a, op, b] = data.toString().split(' ');
    // console.log(a, op, b)
    const result = operations[op](+a, +b);
    connection.write(`result = ${result}`)
    // connection.pipe(connection);
  });

  /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  // connection.write('Mensagem do servidor!\r\n');
  server.getConnections((err, count) => {
    const message = err || `${count } clientes conectados`
    console.log(message)
  })
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});