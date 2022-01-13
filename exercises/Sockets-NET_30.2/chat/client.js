const net = require('net');
const stdin = process.openStdin();
/* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
const client = new net.Socket();

// conecta o socket 
client.connect(8080, 'localhost', () => {
  console.log('Cliente conectado ao servidor!');
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();
   client.write(message);
  });
});

/* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data' é ativado quando o servidor envia uma mensagem para o cliente. */
client.on('data', (data) => {
  console.log(data.toString());
  // client.end();
});

/* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */
client.on('end', () => {
  console.log('Desconectado do servidor');
});
