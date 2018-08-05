/**
 * Created by ximing on 2018/7/12.
 */

const Router = require('koa-router');
const mock = require('./mock');
const webhook = require('./webhook');
const oauth = require('./oauth');
const home = require('./home');

const router = new Router();
mock.register(router);
webhook.register(router);
oauth.register(router);
home.register(router);
module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
};
