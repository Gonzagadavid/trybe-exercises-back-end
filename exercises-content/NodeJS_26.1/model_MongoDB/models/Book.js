const connection = require('./connection');

class Book {

  async getAll () {
    const db = await connection()
    const resp = await db.collection('books').find().toArray();
    return resp
  }

  async getByAuthorId (id) {
    const db = await connection()
    const resp = await db.collection('books').find({author_id: +id}).toArray();
    console.log(resp)
    return resp;
  }

  async create (title, author_id) {
    const query = 'INSERT INTO model_example.books(title, author_id) VALUES(?,?);';
    await connection.execute(query, [title, author_id]);
  }
}

const books = new Book();

module.exports = books;