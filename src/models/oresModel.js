const knex = require('../lib/knex');

module.exports = {
  getAll() {
    return knex('ores');
  },
  removeAll() {
    return knex('ores').truncate();
  },
  getWithPrice() {
    return knex
      .select('ores.*','prices.sell', 'prices.buy')
      .from('ores')
      .leftJoin('prices', 'ores.name', 'prices.name');  
  }
};
