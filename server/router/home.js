/**
 * Created by ximing on 2018/7/18.
 */
const request = require('request');
const path = require('path');
const webpackConfig = require('../../webpack.dev.conf.js');

const home = async function(ctx) {
    try {
        const filename = path.resolve(webpackConfig.output.path, 'index.html');
        ctx.response.type = 'html';
        ctx.response.body = ctx.webpackKoaMiddleware.devMiddleware.fileSystem.createReadStream(
            filename
        );
    } catch (e) {
        console.error(e);
    }
};
module.exports.register = function(router, app) {
    router.get('/', home);
    router.get('/login', home);
};
