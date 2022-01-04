const express = require('express');
const route = require('./routes/router');

const PORT = 3100;

const app = express();
app.use(express.json());

app.use('/', route);

app.listen(PORT, () => global.console.log(`start in port: ${PORT}`));
