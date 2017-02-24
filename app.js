/**
 * Created by huguoliang on 2017/2/24.
 */

'use strict';

const loader = require('./lib/redlock.loader');

module.exports = app => {
    loader(app);
};