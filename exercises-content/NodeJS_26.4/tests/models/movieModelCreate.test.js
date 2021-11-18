const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
/* Vamos importar o módulo responsável para abrir a conexão nos nossos models para poder fazer o seu `double`.*/
const mongoConnection = require('../../models/connection');

// /*
//   Como ainda não temos a implementação, vamos fixar
//   um objeto simulando os métodos que iremos desenvolver,
//   porém, eles não terão nenhum comportamento
// */
// const MoviesModel = {
//   create: () => {}
// };

const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {

    /* Vamos deixar o objeto com o mock da conexão como uma variável global dentro desse describe. */
    let connectionMock; 

  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

       /* Esta é uma forma provisória para mockar a função insertOne
      Desta forma ela não vai chamar o banco de verdade para fazer esse teste */
      // before(() => {
      //   const ID_EXAMPLE = '604cb554311d68f491ba5781';
      //   const insertOne = async () => ({ insertedId: ID_EXAMPLE });
      //   const collection = async () => ({ insertOne });
      //   const db = async (databaseName) => ({ collection });
      //   const getConnectionMock = async () => ({ db });

      //   connectionMock = getConnectionMock()
      //     .then((conn) => conn.db('model_example'));

      //   sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
      // });

       /* Aqui atualizamos o código para usar o banco montado pela lib `mongo-memory-server` */
    before(async () => {
      const DBServer = new MongoMemoryServer();
      const URLMock = await DBServer.getUri();

      connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then((conn) => conn.db('model_example'));

      
      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });
         /* Restauraremos a função `getConnection` original após os testes. */
         after(() => {
          mongoConnection.getConnection.restore();
        });


  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

     /* Aqui de fato estamos testando se o filme foi cadastrado após chamar a função `create`.
    Para isso fizemos uma consulta para o banco para checar se existe um filme com o título cadastrado */
    it('deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock.collection('movies').findOne({ title: payloadMovie.title });
      expect(movieCreated).to.be.not.null;
    });
  });
});