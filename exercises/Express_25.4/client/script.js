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