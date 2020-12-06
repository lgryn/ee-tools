const knex = require("../lib/knex");

module.exports = {
  addAll(rows, chunkSize = 100) {
    return knex.batchInsert("prices", rows, chunkSize);
  },
  removeAll() {
    return knex("prices").truncate();
  },
};
