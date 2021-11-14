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
    return resp;
  }

  async create (title, author_id) {
    const db = await connection()
    const resp = await db.collection('books').insertOne({ author_id, title });
  }
}

const books = new Book();

module.exports = books;