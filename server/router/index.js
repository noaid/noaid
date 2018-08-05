/**
 * Created by ximing on 2018/7/12.
 */

const Router = require('koa-router');
const mock = require('./mock');
const webhook = require('./webhook');
const oauth = require('./oauth');
const home = require('./home');
const app = require('./app');

const router = new Router();
webhook.register(router);
home.register(router);
app.register(router);
mock.register(router);
oauth.register(router);
module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
};
