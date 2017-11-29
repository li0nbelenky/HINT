
const Router = require('koa-router'),
      router = new Router(),

      uuidv4 = require('uuid/v4'),
      redis = require('redis'),

      config = require('../config/config'),
      database = require('../database'),
      helper = require('../helper'),

    functions = require('../functions');

// let redisClient = redis.createClient({
//     host: config.redis.host,
//     port: config.redis.port
// });

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

async function health(ctx) {
    ctx.body = {
        status: true
    };
    ctx.status = 200;
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

async function createNewUser(ctx) {
    let user = ctx.request.body;

    let keys = ['id', 'name', 'role', 'department', 'office_number'];
    if (!helper.validateObjectKeys(keys, user, ctx)) {
        return;
    }

    try {
        let isUserExist = await database.checkUserExist(user.id);
        if (!isUserExist) {
            await database.addNewUser(user);

            ctx.body = {
                status: true,
                id: user.id
            };
            ctx.status = 200;
        } else {
            let errorResponse = 'User with id: ' + user.id + ' already exist!';
            console.error(errorResponse);

            ctx.body = errorResponse;
            ctx.status = 400;
        }

    } catch (ex) {
        console.error(ex);

        ctx.body = ex;
        ctx.status = 400;
    }
}

async function createNewNotification(ctx) {
    let notification = ctx.request.body;

    let keys = ['user_id', 'hint_id', 'type'];
    if (!helper.validateObjectKeys(keys, notification, ctx)) {
        return;
    }

    try {
        // check if user exists
        await database.getUserByID(notification.user_id);

        // check if hint exist
        await database.getHintByID(notification.hint_id);

        await database.addNewNotification(notification);

        ctx.body = {
            status: true,
            uid: notification.uid
        };
        ctx.status = 200;
    } catch (ex) {
        console.error(ex);

        ctx.body = ex;
        ctx.status = 400;
    }
}

async function departments_impact(ctx) {
    let data;
    await functions.getDepartmentsImpact().then(function(data){
        console.log(data)
        ctx.body = {
            status: true,
            data: data
        }
    })
}

async function getNotificationsByUserID(ctx) {
    console.log(ctx.params);

    let userID = ctx.params.userID;

    try {
        // check if user exists
        await database.getUserByID(userID);

        let notifications = await database.getNotificationsByUserID(userID);

        ctx.body = {
            status: true,
            user_id: userID,
            notifications: notifications
        };
        ctx.status = 200;
    } catch (ex) {
        console.error(ex);

        ctx.body = ex;
        ctx.status = 400;
    }
}

async function getHintsByTagDepStatus(ctx) {
    let requests = ctx.request.body;
    let tags = requests['tags']
    let dep = requests['dep']
    let status = requests['status']
    await functions.getHintsByTagDepStatus(tags, dep, status).then(function(data){
        console.log("sdsd", data)
        // console.log("labels", labels)
        ctx.body = {
            status: true,
            data: data
        }
    })
}

router.get('/health', health);

router.post('/hint/create', createNewHint);
router.post('/user/create', createNewUser);
router.post('/notification/create', createNewNotification);

router.get('/notification/:userID', getNotificationsByUserID)


router.get('/feed', getFeedItems);
router.post('/follow', addFollowerToHint);

router.get('/departments_impact', departments_impact);
router.post('/getHintsByTagDepStatus', getHintsByTagDepStatus);

module.exports = router;