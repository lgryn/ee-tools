exports.up = function(knex) {
  return knex.schema.createTable('prices', table => {
    table.increments('id');
    table.string('item_id', 255).notNullable();
    table.string('name', 255).notNullable();
    table.float('buy', 80, 2).defaultTo(null);
    table.float('sell', 80, 2).defaultTo(null);
  });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('prices');
};
