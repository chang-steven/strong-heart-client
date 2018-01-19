require('dotenv').config();

module.exports = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api',
  ENV: process.env.NODE_ENV || 'production',
  PORT: process.env.PORT,
  CONCURRENCY: process.env.WEB_CONCURRENCY,
  DATABASE_URL: process.env.DATABASE_URL || global.DATABASE_URL,
};
