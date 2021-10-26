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
