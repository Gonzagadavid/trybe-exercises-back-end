const cepFormat = (cep) => `${cep.slice(0, 5)}-${cep.slice(5)}`;

module.exports = cepFormat;
