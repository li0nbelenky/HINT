const env = process.env.NODE_ENV || 'development';

if (env === 'master' || env === 'staging') {
  var config = {
    config: {
      WEBSERVER: 'hint-staging.infra-team.com'
    }
  };
} else {
  var config = {
    config: {
      WEBSERVER: 'localhost'
    }
  };
}

export default config.config;
