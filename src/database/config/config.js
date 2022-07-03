require('@babel/register');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    seederStorage: 'sequelize',
    logging: false,
    dialectOptions: {
      requestTimeout: 800000
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    seederStorage: 'sequelize',
    logging: false,
    dialectOptions: {
      requestTimeout: 800000
    },
    pool: {
      max: 70,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  },
  qa: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    seederStorage: 'sequelize',
    logging: false,
    dialectOptions: {
      requestTimeout: 800000
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_DEV_TEST,
    host: process.env.DB_TEST_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  },
  staging: {
    use_env_variable: 'DATABASE_URL'
  },
  SECRETKEY: process.env.SECRET
};
