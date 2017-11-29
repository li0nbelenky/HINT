'use strict';

function validateObjectKey(path, data, ctx) {
    let subData = data;
    let checkKey = path;

    if (path.includes('.')) {
        let keys = path.split('.');
        checkKey = keys[keys.length - 1];
        for (var i = 0; i < keys.length - 1; i++) {
            let key = keys[i];
            subData = subData[key];
        }
    }

    if (!(checkKey in subData)) {
        ctx.body = {
            success: false,
            description: path + ' is mandatory'
        };

        ctx.status = 400;
        return false;
    }

    return true;
}

function validateObjectKeys(keys, data, ctx) {
    for (var i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (!validateObjectKey(key, data, ctx)) {
            return false;
        }
    }

    return true;
}

module.exports.validateObjectKeys = validateObjectKeys;