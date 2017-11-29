const env = process.env.NODE_ENV || 'development';


if(env === 'master' || 'staging'){
  var config = {
    config : {
      WEBSERVER: 'web-server'
    }
  }
} else {
  var config = {
    config : {
      WEBSERVER: 'localhost'
    }
  }

}



export default config.config;