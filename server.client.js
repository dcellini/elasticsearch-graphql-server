const ElasticSearch = require('elasticsearch');

/**
 * *** ElasticSearch *** client
 * @type {Client}
 */

const client = new ElasticSearch.Client({
  host: 'https://fdnurlxtj2:l65d9equvz@elasticsearch-books-5283871059.us-east-1.bonsaisearch.net:443',
  log: 'trace'
});

module.exports = client;
