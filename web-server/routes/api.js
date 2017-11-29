'use strict';

const Router = require('koa-router'),
      router = new Router(),

      uuidv4 = require('uuid/v4'),
      redis = require('redis'),

      config = require('../config/config');

let redisClient = redis.createClient({
    host: config.redis.host,
    port: config.redis.port
});

const mockDB = [
    {
        payload: [
            { title: 'Arie Belenky', subtitle: 'Software Developer', id: uuidv4() },
            { title: 'Bigi Zigule', subtitle: 'Software Engineer', id: uuidv4() }
        ]
    },
    {
        payload: [
            { title: 'Lev Belenky', subtitle: 'Software Developer', id: uuidv4() },
            { title: 'Zigi Bigule', subtitle: 'Software Engineer', id: uuidv4() }
        ]
    },
    {
        payload: [
            { title: 'Arie Bell', subtitle: 'Software Developer', id: uuidv4() },
            { title: 'Daniel Zigi', subtitle: 'Software Engineer', id: uuidv4() }
        ]
    },
    {
        payload: [
            { title: 'Foo Bar', subtitle: 'Software Developer', id: uuidv4() },
            { title: 'Barr Foo', subtitle: 'Software Engineer', id: uuidv4() },
            { title: 'Hoo Haa', subtitle: 'Boo Baa', id: uuidv4() }
        ]
    }
];


async function getFeedItems(ctx) {
// ctx.body = {
//   payload: [{title: 'Arie Belenky', subtitle: 'Software Developer'},
//   {title: 'Zigi Bigule', subtitle: 'Software Engineer'}],
// };
// ctx.body = redisClient.hgetall((err, obj)=>{
//     return obj;
// });
    ctx.body = mockDB[Math.floor(Math.random() * 4)];
    ctx.status = 200;
}

async function addFollowerToHint(ctx) {
    try {
        console.log('ctx.request.body');
        console.log(ctx.request.body);
// validate all needed props were sent to the server
// redisClient.set(ctx.request.body.hintId, ctx.request);
        ctx.status = 200;
    } catch (e) {
        ctx.status = 400;
    }
}
async function createNewHint(ctx) {
    try {
        redisClient.set(ctx.request.body.hintId, ctx.request);
        ctx.status = 200;
    } catch (e) {
        ctx.status = 400;
    }
}

router.get('/feed', getFeedItems);

router.post('/createhint', createNewHint);
router.post('/follow', addFollowerToHint);

module.exports = router;