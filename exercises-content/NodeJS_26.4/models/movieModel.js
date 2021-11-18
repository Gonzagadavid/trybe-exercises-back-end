const mongoConnection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

// const create = async ({ title, directedBy, releaseYear }) => {
//   /* Removemos o trecho que fazia  inserção no banco para ter uma prova 
//   que nosso teste não está testando de fato a inserção de um objeto no banco! */
  
//   return {
//     id: 1,
//   };
// };


module.exports = {
  create,
};
