const knex = require('../lib/knex');

module.exports = {
  getAll() {
    return knex('ores');
  },
  removeAll() {
    return knex('ores').truncate();
  }
};
