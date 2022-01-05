const { Book } = require('../models')

const update = async (id, book) => {
  const [bookModify] = await Book.update({...book}, { where: { id } });

  if(!bookModify) throw { status: 404, message: 'not found' };
  
  return bookModify
} 

module.exports = update;