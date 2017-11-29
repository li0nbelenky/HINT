'use strict';
const Promise = require("bluebird"),
    AWS = require("aws-sdk"),
    config = require('./config/config'),
    _ = require("lodash/fp");

AWS.config.update({
    region: config.AWS.REGION
});

let docClient = new AWS.DynamoDB.DocumentClient();

module.exports = {

    getDepartments : function () {
        // console.log(config.AWS.REGION)
        return new Promise(function(resolve, reject) {
            let params = {
                TableName: config.AWS.DEPARTMENTS_TABLE,
                Key: {

                }
            };

            docClient.scan(params, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data)
                }
            });
        });
    },

    getHintsByHelperDep : function (dep) {
        // console.log(dep)
        return new Promise(function(resolve, reject) {
            let params = {
                TableName: config.AWS.HINTS_TABLE,

                FilterExpression: "#helper_dep = :helper_dep and #status= :status",
                ExpressionAttributeNames: {
                    "#helper_dep": "helper_dep",
                    "#status": "status",
                },
                ExpressionAttributeValues: { ":helper_dep": dep, ":status": "closed" }
            };

            docClient.scan(params, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data['Items'])
                }
            });
        });
    },

    update: function (data, uid, set, reserveNames) {
        return new Promise(function(resolve, reject) {
            let params = {
                TableName:config.AWS.JOB_TABLE,
                Key: {
                    uid : uid
                },
                UpdateExpression: set,
                ExpressionAttributeNames: reserveNames,
                ExpressionAttributeValues: data,
                ReturnValues: "UPDATED_NEW"
            };

            if (Object.getOwnPropertyNames(reserveNames).length < 1){
                delete params.ExpressionAttributeNames;
            }

            docClient.update(params, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve({"success": true})
                }
            });
        });
    },
}