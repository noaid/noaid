/**
 * Created by ximing on 2018/7/18.
 */
'use strict';
const webhook = async function(ctx) {
    const { app, params, wrap } = ctx;
    const { agent } = app;
    const { uid, id, secret } = params;
    await agent.findAgent(id);
    wrap.ok();
};
module.exports.register = function(router, app) {
    router.all('/u/:uid/webhook/:id/:secret', webhook);
};
