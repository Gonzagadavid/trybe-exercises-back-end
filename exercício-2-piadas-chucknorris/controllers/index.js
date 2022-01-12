const { findCategories, findJokeByCategory } = require('../models');

const getCategories = async (_req, res) => {

  const { categories, error } = await findCategories()

  if (error) return res.render('error', error)
  
  return res.render('categories/index', {categories})

}

const getJokeByCategory = async (req, res) => {
  const { category: c } = req.params;

  const category = c || 'any';
  const { setup, joke: jk, error } = await findJokeByCategory(category)

  const joke =  jk || setup
  if (error) return res.render('error', error)
  return res.render('joke', { joke, category })
}

module.exports = {
  getCategories,
  getJokeByCategory
}
