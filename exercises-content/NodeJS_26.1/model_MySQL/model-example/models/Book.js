const connection = require('./connection');

class Book {

  async getAll () {
    const [allBooks] =  await connection.execute('SELECT title FROM books;');
    return allBooks;
  }

  async getByAuthorId (id) {
    const [allBooksByAuthorId] =  await connection.execute(`SELECT title FROM books WHERE author_id = ${id};`);
    return allBooksByAuthorId;
  }
}

const books = new Book();

module.exports = books;