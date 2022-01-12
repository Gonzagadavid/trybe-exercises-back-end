const axios = require('axios')

const findCategories = async () => {
  const { data } = await axios.get('https://v2.jokeapi.dev/categories')

  return data
} 

const findJokeByCategory = async (category) => {
  const { data } = await axios.get(`https://v2.jokeapi.dev/joke/${category}`)
  return data
}

module.exports = {
  findCategories,
  findJokeByCategory
}