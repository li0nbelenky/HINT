let env;

env =
  process.env.NODE_ENV == 'test' || !process.env.NODE_ENV
    ? 'development'
    : process.env.NODE_ENV;

const config = require('simpler-config').load(
  {
    development: require('./development'),
    staging: require('./staging'),
    production: require('./master')
  }[env]
);

module.exports = config;
