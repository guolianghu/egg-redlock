/**
 * Created by huguoliang on 2017/2/24.
 */
'use strict';

const redis = require('ioredis');
const Redlock = require('redlock');

module.exports = app => {
    app.addSingleton('redlock', function (config, app) {
        var nodes = config.nodes || [];
        var redis_clients = [];
        nodes.forEach(function (opt) {
            var client = redis.createClient(opt);
            redis_clients.push(client);
        });

        return new Redlock(redis_clients, config);
    })
}