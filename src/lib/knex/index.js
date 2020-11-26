require('dotenv').config();

const knex = require('knex');
const knexFile = require('../../../knexfile');
const configOptions = knexFile[process.env.NODE_ENV || 'development'];

module.exports = knex(configOptions);
