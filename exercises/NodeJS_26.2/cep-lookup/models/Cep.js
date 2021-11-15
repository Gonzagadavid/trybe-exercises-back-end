const fetch = require('node-fetch');
const cepValid = require('../services/cepValid');
const connection = require('./connection');

class CepModel {
  async getDateByCep(cep) {
    const [date] = await connection().execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
    if (!date.length) return this.middleCep(cep);
    return date;
  }

  static async insertCep(date) {
    const query = 'INSERT INTO ceps(cep, logradouro, bairro, localidade, uf) VALUES(?,?,?,?,?);';
    await connection().execute(query, date);
  }

  async middleCep(cepParam) {
    const [{
      erro, cep, logradouro, bairro, localidade, uf,
    }] = await this.getExternalCep(cepParam);

    if (erro) return [];
    const cepValidate = cepValid(cep);

    await this.insertCep([cepValidate, logradouro, bairro, localidade, uf]);

    return [{
      cep: cepValid(cep), logradouro, bairro, localidade, uf,
    }];
  }

  static async getExternalCep(cep) {
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!resp.ok) return { erro: true };
    const cepRes = await resp.json();
    return [cepRes];
  }
}

const Cep = new CepModel();

module.exports = Cep;
