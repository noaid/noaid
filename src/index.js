/**
 * Created by ximing on 2018/8/1.
 */
'use strict';
require('dotenv').config();
const http = require('http');
const koa = require('koa');
const koaJson = require('koa-json');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('./router');
const Boot = require('./boot');
const WrapResponse = require('./utils/wrapResponse');

const port = process.env.PORT;

const app = new koa();
app.use(async function(ctx, next) {
    ctx.app = app;
    ctx.wrap = new WrapResponse(ctx);
    await next();
});

app.use(bodyParser());
app.use(koaJson());
koaRouter(app);
new Boot(app);
const server = http.createServer(app.callback());

server.listen(port, () => {
    console.log(`listen port is ${port}`);
});
