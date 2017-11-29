'use strict';

const Promise = require("bluebird"),
      AWS = require("aws-sdk"),

      uuidv4 = require('uuid/v4'),

      config = require('./config/config');

AWS.config.update({
    region: config.aws.region
});

let docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    getUserByID: function (id) {
        return new Promise(function (resolve, reject) {
            let params = {
                TableName: config.aws.users_table,
                Key: {
                    id: id
                }
            };

            docClient.get(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    if ('Item' in data) {
                        resolve(data.Item);
                    } else {
                        reject('Not found user with id: ' + id);
                    }
                }
            });
        });
    },

    checkUserExist: function (id) {
        return new Promise(function (resolve, reject) {
            let params = {
                TableName: config.aws.users_table,
                Key: {
                    id: id
                }
            };

            docClient.get(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    if ('Item' in data) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            });
        });
    },

    getHintByID: function (uid) {
        return new Promise(function (resolve, reject) {
            let params = {
                TableName: config.aws.hints_table,
                Key: {
                    uid: uid
                }
            };

            docClient.get(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    if ('Item' in data) {
                        resolve(data.Item);
                    } else {
                        reject('Not found hint with uid: ' + uid);
                    }
                }
            });
        });
    },

    addNewHint: function (hint) {
        return new Promise(function (resolve, reject) {
            hint.uid = uuidv4();

            let currentTime = Date.now().toString();

            hint.created_ts = currentTime;
            hint.updated_ts = currentTime;

            let params = {
                TableName: config.aws.hints_table,
                Item: hint
            }

            docClient.put(params, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    },

    addNewUser: function (user) {
        return new Promise(function (resolve, reject) {
            user.open_hints = 0;
            user.resolved_hints = [];
            user.score = 0;

            let params = {
                TableName: config.aws.users_table,
                Item: user
            }

            docClient.put(params, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    },

    addNewNotification: function (notification) {
        return new Promise(function (resolve, reject) {
            notification.uid = uuidv4();

            notification.ts = Date.now().toString();

            let params = {
                TableName: config.aws.notifications_table,
                Item: notification
            }

            docClient.put(params, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    },

    getDepartments: function () {
        // console.log(config.AWS.REGION)
        return new Promise(function (resolve, reject) {
            let params = {
                TableName: config.AWS.DEPARTMENTS_TABLE,
                Key: {}
            };

            docClient.scan(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data)
                }
            });
        });
    },

    getHintsByHelperDep: function (dep) {
        // console.log(dep)
        return new Promise(function (resolve, reject) {
            let params = {
                TableName: config.AWS.HINTS_TABLE,

                FilterExpression: "#helper_dep = :helper_dep and #status= :status",
                ExpressionAttributeNames: {
                    "#helper_dep": "helper_dep",
                    "#status": "status",
                },
                ExpressionAttributeValues: {":helper_dep": dep, ":status": "closed"}
            };

            docClient.scan(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data['Items'])
                }
            });
        });
    }
}