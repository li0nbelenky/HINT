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
      {
        action: 'New hint',
        hint_id: uuidv4(),
        user_id: uuidv4(),
        user_full_name: 'Arie Belenky',
        user_department: 'installCore',
        title: 'Please help me create KOA web server with generator functions',
        description:
          'I try to yield from generator function and receive a reference to a Promise instead of the return value',
        status: 'open',
        tags: ['Node JS', 'KOA', 'Generators', 'ES6'],
        views: 0,
        followers: [],
        solution: null,
        created_ts: new Date().toJSON(),
        updated_ts: new Date().toJSON(),
        helper: null,
        helper_full_name: null,
        helper_department: null
      },
      {
        action: 'Frog match',
        hint_id: uuidv4(),
        user_id: uuidv4(),
        user_full_name: 'Gil Cohen',
        user_department: 'installCore',
        title: 'Please help me create KOA web server with generator functions',
        description:
          'I try to yield from generator function and receive a reference to a Promise instead of the return value',
        status: 'open',
        tags: ['Node JS', 'KOA', 'Generators', 'ES6'],
        views: 0,
        followers: [uuidv4(), uuidv4(), uuidv4()],
        solution: null,
        created_ts: new Date().toJSON(),
        updated_ts: new Date().toJSON(),
        helper: uuidv4(),
        helper_full_name: 'Arie Belenky',
        helper_department: 'Infra'
      },
      {
        action: 'Resolved',
        hint_id: uuidv4(),
        user_id: uuidv4(),
        user_full_name: 'Daniel Ledevich',
        user_department: 'installCore',
        title: 'Please help me create KOA web server with generator functions',
        description:
          'I try to yield from generator function and receive a reference to a Promise instead of the return value',
        status: 'open',
        tags: ['Node JS', 'KOA', 'Generators', 'ES6'],
        views: 0,
        followers: [uuidv4(), uuidv4(), uuidv4()],
        solution: 'RTFM',
        created_ts: new Date().toJSON(),
        updated_ts: new Date().toJSON(),
        helper: uuidv4(),
        helper_full_name: 'Arie Belenky',
        helper_department: 'Infra'
      }
    ]
  },
  {
    payload: [
      {
        action: 'New hint',
        hint_id: uuidv4(),
        user_id: uuidv4(),
        user_full_name: 'Shany Shmuely',
        user_department: 'installCore',
        title: 'Please help me create KOA web server with generator functions',
        description:
          'I try to yield from generator function and receive a reference to a Promise instead of the return value',
        status: 'open',
        tags: ['Node JS', 'KOA', 'Generators', 'ES6'],
        views: 0,
        followers: [],
        solution: null,
        created_ts: new Date().toJSON(),
        updated_ts: new Date().toJSON(),
        helper: null,
        helper_full_name: null,
        helper_department: null
      },
      {
        action: 'Frog match',
        hint_id: uuidv4(),
        user_id: uuidv4(),
        user_full_name: 'Lior Haiman',
        user_department: 'installCore',
        title: 'Please help me create KOA web server with generator functions',
        description:
          'I try to yield from generator function and receive a reference to a Promise instead of the return value',
        status: 'open',
        tags: ['Node JS', 'KOA', 'Generators', 'ES6'],
        views: 0,
        followers: [uuidv4(), uuidv4(), uuidv4()],
        solution: null,
        created_ts: new Date().toJSON(),
        updated_ts: new Date().toJSON(),
        helper: uuidv4(),
        helper_full_name: 'Gil Cohen',
        helper_department: 'Infra'
      },
      {
        action: 'Resolved',
        hint_id: uuidv4(),
        user_id: uuidv4(),
        user_full_name: 'Dmytro Kostylov',
        user_department: 'installCore',
        title: 'Please help me create KOA web server with generator functions',
        description:
          'I try to yield from generator function and receive a reference to a Promise instead of the return value',
        status: 'open',
        tags: ['Node JS', 'KOA', 'Generators', 'ES6'],
        views: 0,
        followers: [uuidv4(), uuidv4(), uuidv4()],
        solution: 'RTFM',
        created_ts: new Date().toJSON(),
        updated_ts: new Date().toJSON(),
        helper: uuidv4(),
        helper_full_name: 'Valentine Pavchuk',
        helper_department: 'Infra'
      }
    ]
  }
];

async function getFeedItems(ctx) {

    try {

        let activities = await database.getFeedItems();

        activities = activities.Items;
        activities.sort(function(first, second) {
            return second.created_ts - first.created_ts;
        });

        ctx.body = {
            status: true,
            activities: activities
        };
        ctx.status = 200;
    } catch (ex) {
        console.error(ex);

        ctx.body = ex;
        ctx.status = 400;
    }
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
  console.log(hint);

  let keys = [
    'Department',
    'title',
    'description',
    'hintTitle',
    'email',
    'Position',
    'fullName',

    // 'status',
    'tags',
    // 'followers',
  //   'helper',
  //   'helper_department'
  ];
  if (!helper.validateObjectKeys(keys, hint, ctx)) {
    return;
  }

  try {
    // check if user exists
    await database.getUserByID(hint.user_id);

    await database.addNewHint(hint);

    await database.addNewActivity('New hint created', hint.uid);

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
  await functions.getDepartmentsImpact().then(function(data) {
    console.log(data);
    ctx.body = {
      status: true,
      data: data
    };
  });
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
  let tags = requests['tags'];
  let dep = requests['dep'];
  let status = requests['status'];
  await functions
    .getHintsByTagDepStatus(tags, dep, status)
    .then(function(data) {
      console.log('sdsd', data);
      // console.log("labels", labels)
      ctx.body = {
        status: true,
        data: data
      };
    });
}

router.get('/health', health);

router.post('/hint/create', createNewHint);
router.post('/user/create', createNewUser);
router.post('/notification/create', createNewNotification);

router.get('/notification/:userID', getNotificationsByUserID);

router.get('/feed', getFeedItems);
router.post('/follow', addFollowerToHint);

router.get('/departments_impact', departments_impact);
router.post('/getHintsByTagDepStatus', getHintsByTagDepStatus);

module.exports = router;
