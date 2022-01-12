const axios = require('axios')

const getJokes = async () => {
  const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'
  const { data } = await axios.get(url);
  const { joke, erro } = data;

  return { joke, erro }
}

module.exports = { getJokes }
