exports.up = function(knex) {
  return knex.schema
    .createTable('rarity', table => {
      table.increments('id').primary().unsigned();
      table.string('name', 255).notNullable();
    })
    .createTable('ores', table => {
      table.increments('id').primary().unsigned();
      table
        .integer('rarity_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('rarity')
        .onDelete('CASCADE')
        .index();
      table.string('name', 255).notNullable();
      table.float('volume').notNullable();
      table.json('security').notNullable();
    })
  ;
};

exports.down = function(knex) {
  return knex.schema.dropTable('ores').dropTable('rarity');
};
