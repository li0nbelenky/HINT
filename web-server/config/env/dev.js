'use_strict';

module.exports = {
    port: 8000,
    version: '2.0.0',

    redis: {
        host: 'localhost',
        port: 6379
    },

    AWS: {
        REGION: "eu-central-1",
        HINTS_TABLE: "hints",
        USERS_TABLE: "users",
        ACTIVITY_TABLE: "activitys",
        DEPARTMENTS_TABLE: "departments"
    }
};