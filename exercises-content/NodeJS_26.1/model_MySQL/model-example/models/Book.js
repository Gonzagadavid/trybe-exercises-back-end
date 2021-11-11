const connection = require('./connection');

class Book {

  async getAll () {
    const [allBooks] =  await connection.execute('SELECT title FROM books;');
    return allBooks;
  }

  async getByAuthorId (id) {
    const query = 'SELECT title FROM books WHERE author_id = ?;'
    const [allBooksByAuthorId] =  await connection.execute(query, [id]);
    return allBooksByAuthorId;
  }
}

const books = new Book();

module.exports = books;