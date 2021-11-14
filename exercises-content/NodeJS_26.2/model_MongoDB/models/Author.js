// hello-msc/models/Author.js

const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Cria uma string com o nome completo da pessoa autora

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName, author_id } = authorData;

const fullName = [firstName, middleName, lastName, author_id]
  .filter((name) => name)
  .join(' ');

return {
  id,
  firstName,
  middleName,
  lastName,
  name: fullName,
  author_id,
 };
};

// Busca todos os autores do banco.

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName, author_id }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
          author_id,
        })
      )
  );
}

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName, author_id } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName, author_id });
};

const isNonEmptyString = (value) => {
  if (!value) return false;

  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;

  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));


const findByName = async (firstName, middleName, lastName) => {
    // Determinamos se devemos buscar com ou sem o nome do meio
    const query = middleName
        ? { firstName, middleName, lastName }
        : { firstName, lastName };
    
    // Executamos a consulta e retornamos o resultado
    const author = await connection()
        .then((db) => db.collection('authors').findOne(query));
    
    // Caso nenhum author seja encontrado, devolvemos null
    if (!author) return null;
    
    // Caso contrário, retornamos o author encontrado
    return getNewAuthor(author);
};
    
module.exports = {
  getAll,
  findById,
  isValid,
  create,
  findByName,
};