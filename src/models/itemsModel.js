const knex = require('../lib/knex');

module.exports = {
  addAll(rows, chunkSize = 100) {
    return knex
      .batchInsert('items', rows, chunkSize)
  },
  removeAll() {
    return knex('items').truncate();
  }
};
