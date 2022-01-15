const io = window.io();

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true});

io.emit('joinRoom', { username, room });

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
}

io.on('serverMessage', (message) => createMessage(message));

// io.emit('joinRoom', { username, room });

const form = document.querySelector('form');
const inputMessage = document.querySelector('#messageInput');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const message = inputMessage.value;
  io.emit('roomClientMessage', { room, message });
  inputMessage.value = '';
  return false;
});
