const getSimpsons = async () => {
  const resp = await fetch('http://localhost:5300/simpsons');
  if(!resp.ok) throw new Error('ocorreu um erro na requisição getSimpsons');

  const simpsons = await resp.json();

  return simpsons
}

export default getSimpsons;
