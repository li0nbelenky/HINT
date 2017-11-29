'use strict';
const Koa = require('koa'),
      bodyParser = require('koa-bodyparser'),
      cors = require('@koa/cors'),

      app = new Koa(),
      api = require('./routes/api'),

      config = require('./config/config');

// Response Handlers
app.use(cors({
    credentials: true
}));

app.use(bodyParser());

app.use(api.allowedMethods());
app.use(api.routes());

process.on('uncaughtException', function(err) {
    console.log('uncaughtException', err);
});

console.log('Server started on port: ' + config.port);
app.listen(config.port);

module.exports = {
    app: app
};
