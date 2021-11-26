require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(`${__dirname}/uploads`));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const files = fs
      .readdirSync('./uploads')
      .map((fileName) => fileName.replace(/^\d+-/, ''));
    
    // const exists = file.reduce(({ originalname }) => files.includes(originalname) || false);
    if (files.includes(file.originalname)) {
      return callback({ statusCode: 409, message: 'File already exists' });
    }

    if (extension !== '.png') {
      return callback({ statusCode: 403, message: 'Extension must be `png`' });
    }

    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.post('/upload', upload.array('file', 10), (req, res) => {
  res.status(200).end();
});

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
