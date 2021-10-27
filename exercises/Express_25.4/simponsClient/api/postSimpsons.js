const postSimpsons = async (simpson) => {
  const resp = await fetch('http://localhost:5300/simpsons', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(simpson)
  });
  
  if(!resp.ok) throw new Error('ocorreu um erro na requisição postSimpsons');

  const fb = resp.json();
  console.log(fb)
}

export default postSimpsons;