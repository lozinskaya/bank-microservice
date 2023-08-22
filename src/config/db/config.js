/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('dotenv').config('.env').parsed;

module.exports = {
  development: {
    dialect: 'postgres',
    host: config.POSTGRES_HOST,
    username: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DB,
    seederStorage: 'sequelize',
  },
};
