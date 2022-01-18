const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3300',
    methods: ['GET', 'POST'],
  }});

  app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', './views');

const route = require('./routes')

app.use('/redes', route)

require('./socket')(io)

// io.listen(3300)

http.listen(3300, () => console.log('reodando na porta 3300'))
