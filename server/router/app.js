/**
 * Created by ximing on 2018/8/5.
 */

const boot = require('../boot');

const app = async function(ctx) {
    const { params, request } = ctx;
    const { key } = params;
    const { method } = request;
    if (key) {
        const _app = boot.getApp(key);
        if (_app) {
            if (_app[method.toLocaleLowerCase()]) {
                await _app[method.toLocaleLowerCase()];
            } else if (_app['all']) {
                await _app['all'](ctx);
            } else {
                ctx.body = `没有实现${method.toLocaleLowerCase()}方法`;
            }
        } else {
            ctx.body = `没有找到${key}应用`;
        }
    } else {
        ctx.body = `key${key}没有定义`;
    }
};
module.exports.register = function(router) {
    router.all('/app/:key/*', app);
};
