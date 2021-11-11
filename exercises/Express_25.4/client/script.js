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
      // Accept: 'application/json',
      // 'Content-Type': 'text/plain'// <----exerc2 foi necessario mudar de  application/json para text/plain
      'Content-Type': 'application/json'// <---- após ajustar o cors do lado do servidor  passou aceitar json
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
      'Content-Type': 'application/json'
    },
    body: data,
    })
  if (!resp.ok) console.log('ocorreu um erro com hello 2')
 const { message } = await resp.json();

 hello2.innerHTML = message;

 setTimeout(() => { hello2.innerHTML = ''}, 2000)
}

btnHello2.addEventListener('click', helloClick2)

// 4 ---------------------------------------------------------------------
const userName3 = document.getElementById('user-name3');
const userAge2 = document.getElementById('user-age2')
const hello3 = document.getElementById('hello3');
const btnHello3 = document.getElementById('btn-hello3');

const helloClick3 = async () => {
  console.log('foi')
  const resp = await fetch(`http://localhost:3500/users/${userName3}/${userAge2}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset="UTF-8";'
    },
    body: JSON.stringify({})
    });
  console.log(resp)
  if (!resp.ok) console.log('ocorreu um erro com hello 3')

  const { message } = await resp.json();

  hello3.innerHTML = message;

  setTimeout(() => { hello3.innerHTML = ''}, 2000)
}

btnHello3.addEventListener('click', helloClick3)
