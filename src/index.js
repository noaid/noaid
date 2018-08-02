/**
 * Created by ximing on 2018/8/1.
 */

const koa = require('koa');
const koaJson = require('koa-json');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('./router');
const Boot = require('./boot');
const inject = require('./middleware/inject');
const exception = require('./middleware/exception');

const app = new koa();
const boot = new Boot(app);
boot.start();
exception(app);
inject(app);
app.use(bodyParser());
app.use(koaJson());
koaRouter(app);
