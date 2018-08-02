/**
 * Created by ximing on 2018/8/1.
 */
'use strict';
const http = require('http');
const koa = require('koa');
const path = require('path');
const koaJson = require('koa-json');
const bodyParser = require('koa-bodyparser');
const koaRouter = require('./router');
const Boot = require('./boot');
const inject = require('./middleware/inject');
const exception = require('./middleware/exception');
const app = new koa();
const config = require('./lib/env-config').config({
    configDir: path.join(__dirname, '../', 'config'),
    pkg: require('../package.json')
});
app.config = config;
exception(app);
inject(app);
app.use(bodyParser());
app.use(koaJson());
koaRouter(app);
new Boot(app);
const server = http.createServer(app.callback());

server.listen(config.port, () => {
    console.log(`listen port is ${config.port}`);
});
