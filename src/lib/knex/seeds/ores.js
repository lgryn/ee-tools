exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ores').del()
    .then(function () {
      // Inserts seed entries
      return knex('ores').insert([
        { name: 'Veldspar', volume: 0.1, security: JSON.stringify({ high: 1, low: -1 }) },
        { name: 'Compressed Veldspar', volume: 0.1, security: JSON.stringify({ high: 1, low: -1 }) },
      ]);
    });
};
