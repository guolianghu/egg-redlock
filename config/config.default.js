/**
 * Created by huguoliang on 2017/2/25.
 */
'use strict';

exports.redlock = {
    client: {
        nodes: [
            {
                host: '10.0.7.62',
                port: 6379,
            },

            {
                host: '10.0.7.62',
                port: 6479,
            },

            {
                host: '10.0.7.62',
                port: 6579,
            }
        ]
    },

    // the expected clock drift; for more details
    // see http://redis.io/topics/distlock
    driftFactor: 0.01, // time in ms

    // the max number of times Redlock will attempt
    // to lock a resource before erroring
    retryCount:  10,

    // the time in ms between attempts
    retryDelay:  400, // time in ms

    // the max time in ms randomly added to retries
    // to improve performance under high contention
    // see https://www.awsarchitectureblog.com/2015/03/backoff.html
    retryJitter:  400, // time in ms

    useAgent: false,
};