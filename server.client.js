const ElasticSearch = require('elasticsearch');

/**
 * *** ElasticSearch *** client
 * @type {Client}
 */

const client = new ElasticSearch.Client({
  host: 'https://c3s7fzosyt:7oz4htt742@elasticsearch-books-636535958.eu-west-1.bonsaisearch.net:443',
  log: 'trace'
});

module.exports = client;
