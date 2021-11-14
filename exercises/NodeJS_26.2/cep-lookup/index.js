const express = require('express');
const pong = require('./controllers/pong');

const app = express();

app.get('/ping', pong);

const PORT = process.env.port || 3000;

app.listen(PORT, () => global.console.log(`server rodando na porta ${PORT}`));
