/**
 * Created by ximing on 2018/8/1.
 */

const koa = require('koa');
const logger = require('koa-logger');
const koaJson = require('koa-json');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');
const koaRouter = require('./router');
const boot = require('./boot');
const inject = require('./middleware/inject');
const exception = require('./middleware/exception');
const auth = require('./middleware/auth');
let env = process.env.NODE_ENV || 'development';
const app = new koa();
boot.init(app);
boot.start();

if (env === 'development') {
    const koaWebpack = require('koa-webpack');
    const config = require('../webpack.dev.conf.js');
    let middleware = null;
    koaWebpack({
        config
    }).then(
        (_middleware) => {
            middleware = _middleware;
            app.use(middleware);
        },
        (err) => {
            console.error(err);
        }
    );
    app.use(async (ctx, next) => {
        ctx.webpackKoaMiddleware = middleware;
        await next();
    });
}

app.use(serve(path.join(__dirname, '../public')));
auth(app);
exception(app);
inject(app);
app.use(logger());
app.use(bodyParser());
app.use(koaJson());
koaRouter(app);
