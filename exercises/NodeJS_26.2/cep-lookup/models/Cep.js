const connection = require('./connection');

class CepModel {
  async getDateByCep(cep) {
    const [date] = await connection().execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
    return date;
  }
}

const Cep = new CepModel();

module.exports = Cep;
