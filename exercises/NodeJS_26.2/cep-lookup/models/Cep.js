const connection = require('./connection');

class CepModel {
  async getDateByCep(cep) {
    const [date] = await connection().execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
    return date;
  }

  async insertCep(date) {
    const query = 'INSERT INTO ceps(cep, logradouro, bairro, localidade, uf) VALUES(?,?,?,?,?);';
    await connection().execute(query, date);
  }
}

const Cep = new CepModel();

module.exports = Cep;
