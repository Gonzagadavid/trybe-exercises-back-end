const { getJokes } = require('../models');

const listJokes = async (_req, res) => {
  const { joke, erro } = await getJokes();

  if (erro) return res.render('erro', { erro });

  return res.render('jokeView', { joke })
} 

module.exports = { listJokes };
