exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id');
    table.string('game_id',255).notNullable();
    table.string('icon_id', 255).notNullable();
    table.string('name', 255).notNullable();
    table.string('slug', 255).notNullable();
    table.integer('price_buy').notNullable().defaultTo(0);
    table.integer('price_sell').notNullable().defaultTo(0);
  });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('items');
};
