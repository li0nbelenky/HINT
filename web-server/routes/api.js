
const Router = require('koa-router'),
      router = new Router(),

      uuidv4 = require('uuid/v4'),
      redis = require('redis'),

      config = require('../config/config'),
      database = require('../database'),
      helper = require('../helper');

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
    ctx.body = mockDB[Math.floor(Math.random() * 4)];
    ctx.status = 200;
}

async function addFollowerToHint(ctx) {
    try {
        console.log('ctx.request.body');
        console.log(ctx.request.body);

        ctx.status = 200;
    } catch (e) {
        ctx.status = 400;
    }
}
async function createNewHint(ctx) {
    let hint = ctx.request.body;

    let keys = ['user_id', 'user_department', 'title', 'description', 'status',
        'tags', 'followers', 'helper', 'helper_department'];

    if (!helper.validateObjectKeys(keys, hint, ctx)) {
        return;
    }

    try {
        // check if user exists
        await database.getUserByID(hint.user_id);

        await database.addNewHint(hint);
        ctx.body = {
            status: true,
            uid: hint.uid
        };

        ctx.status = 200;
    } catch (ex) {
        console.error(ex);

        ctx.body = ex;
        ctx.status = 400;
    }

}

router.get('/feed', getFeedItems);

router.post('/hint/create', createNewHint);

router.post('/follow', addFollowerToHint);

router.get('/latesthints', )



module.exports = router;