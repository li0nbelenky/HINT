'use strict';
const Koa = require('koa'),
  bodyParser = require('koa-body-parser'),
  Router = require('koa-router'),
  app = new Koa(),
  router = new Router(),
  cors = require('koa-cors'),
  mount = require('koa-mount');
 
// Response Handlers
app.use(cors({ credentials: true }));
app.use(bodyParser());
app.use(router.allowedMethods());
app.use(router.routes());

process.on('uncaughtException', function(err) {
  console.log('uncaughtException', err);
});


async function getFeedItems(ctx) {
    ctx.body = {
      payload: [{title: 'Arie Belenky', subtitle: 'Software Developer'},
      {title: 'Zigi Bigule', subtitle: 'Software Engineer'}],
    };
    ctx.status = 200;
  }

router.get('/feed', getFeedItems);

app.listen(8000);

module.exports = { app: app };