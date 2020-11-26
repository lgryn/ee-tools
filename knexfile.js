require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      port: process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_SCHEMAS
    },
    seeds: {
      directory: './src/lib/knex/seeds'
    },
    migrations: {
      directory: './src/lib/knex/migrations'
    }
  },
};
