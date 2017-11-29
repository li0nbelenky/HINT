'use_strict';

module.exports = {
    port: 8000,
    version: '2.0.0',

    aws: {
        region: 'eu-central-1',
        hints_table: 'hints',
        users_table: 'users',
        notifications_table: 'notifications',
        departments_table: "departments"
    },

    redis: {
        host: 'localhost',
        port: 6379
    },

};