// 1 ------------------------------------------------------------
const ping = document.getElementById('ping');
const btnPing = document.getElementById('btn-ping');

const getPing = async () => {
  const resp = await fetch('http://localhost:3500/ping');
  if (!resp.ok) console.log('ocorreu um erro na requisição ping');
  const { message } = await resp.json();

  ping.innerHTML = message;

  setTimeout(() => { ping.innerHTML = '' }, 2000)

}

btnPing.addEventListener('click', getPing)

// 2 ---------------------------------------------------------------------
const userName = document.getElementById('user-name');
const hello = document.getElementById('hello');
const btnHello = document.getElementById('btn-hello');

const helloClick = async () => {
  const data = JSON.stringify({ 'name' : `${userName.value}` });
  const resp = await fetch('http://localhost:3500/hello/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain'// <----exerc2 foi necessario mudar de  application/json para text/plain
    },
    body: data,
    })
  if (!resp.ok) console.log('ocorreu um erro com hello')
 const { message } = await resp.json();

 hello.innerHTML = message;

 setTimeout(() => { hello.innerHTML = ''}, 2000)
}

btnHello.addEventListener('click', helloClick)

// 3 ---------------------------------------------------------------------
const userName2 = document.getElementById('user-name2');
const userAge = document.getElementById('user-age')
const hello2 = document.getElementById('hello2');
const btnHello2 = document.getElementById('btn-hello2');

const helloClick2 = async () => {
  const data = JSON.stringify({ name : userName2.value, age: userAge.value });
  const resp = await fetch('http://localhost:3500/greetings/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain'
    },
    body: data,
    })
  if (!resp.ok) console.log('ocorreu um erro com hello')
 const { message } = await resp.json();

 hello2.innerHTML = message;

 setTimeout(() => { hello2.innerHTML = ''}, 2000)
}

btnHello2.addEventListener('click', helloClick2)
