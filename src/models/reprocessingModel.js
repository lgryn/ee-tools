const knex = require("../lib/knex");

module.exports = {
  addAll(rows, chunkSize = 100) {
    return knex.batchInsert("reprocessing", rows, chunkSize);
  },
  removeAll() {
    return knex("reprocessing").truncate();
  },
};
