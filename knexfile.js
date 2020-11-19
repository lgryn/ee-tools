module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port: 32775,
      user : 'root',
      password : 'password',
      database : 'ee'
    },
    seeds: {
      directory: './src/lib/knex/seeds'
    },
    migrations: {
      directory: './src/lib/knex/migrations'
    }
  },
};
