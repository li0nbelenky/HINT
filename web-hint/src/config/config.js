const env = process.env.NODE_ENV || 'development';

if (env === 'master' || env === 'staging') {
  var config = {
    config: {
      WEBSERVER: 'localhost'
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
