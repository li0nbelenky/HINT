'use strict';
const Koa = require('koa'),
  bodyParser = require('koa-body-parser'),
  Router = require('koa-router'),
  app = new Koa(),
  router = new Router(),
  cors = require('koa-cors'),
  mount = require('koa-mount'),
  redis = require('redis');
 
let redisClient = redis.createClient();

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
    // ctx.body = redisClient.hgetall((err, obj)=>{
    //     return obj;
    // }); 
    ctx.status = 200;
  }

  async function createNewHint(ctx){
    try {
        redisClient.set(ctx.request.body.hintId, ctx.request)
        ctx.status = 200;
    } catch (e) {
        ctx.status = 400;
    }
  }

router.get('/feed', getFeedItems);

router.post('/createhint', createNewHint)

app.listen(8000);

module.exports = { app: app };