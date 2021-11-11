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

  async create (title, author_id) {
    const query = 'INSERT INTO model_example.books(title, author_id) VALUES(?,?);';
    await connection.execute(query, [title, author_id]);
  }
}

const books = new Book();

module.exports = books;