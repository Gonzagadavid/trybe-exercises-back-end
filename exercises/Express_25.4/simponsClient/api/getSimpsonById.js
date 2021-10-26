const getSimpsonById = async (id) => {
  const resp = await fetch(`http://localhost:5300/simpsons/${id}`);
  if(!resp.ok) throw new Error('ocorreu um erro na requisição getSimpsonsById');

  const simpson = await resp.json();

  return simpson
}

export default getSimpsonById;