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
                    id : id
                }
            };

            docClient.get(params, function(err, data) {
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
                    id : id
                }
            };

            docClient.get(params, function(err, data) {
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
    }
}