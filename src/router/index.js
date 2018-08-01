/**
 * Created by ximing on 2018/7/12.
 */
'use strict';
const Router = require('koa-router');
const mock = require('./mock');
const router = new Router();
mock.register(router);
module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
};