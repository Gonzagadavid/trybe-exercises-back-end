const express = require('express');
const pong = require('./controllers/pong');
const error = require('./middleware/error');
const cepRouter = require('./routers/cep');

const app = express();
app.use(express.json());

app.get('/ping', pong);

app.use('/cep', cepRouter);

app.use(error);

const PORT = process.env.port || 3000;

app.listen(PORT, () => global.console.log(`server rodando na porta ${PORT}`));
