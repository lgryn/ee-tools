exports.up = function(knex) {
  return knex.schema.createTable('ores', table => {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.float('volume').notNullable();
    table.json('security').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ores');
};
