exports.up = function(knex) {
  return knex.schema.createTable('reprocessing', table => {
    table.string('skill', 255).notNullable();
    table.string('item', 255).notNullable();
    table.string('component', 255).notNullable();
    table.float('amount').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reprocessing');
};
