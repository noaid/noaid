/**
 * Created by ximing on 2018/7/18.
 */

const webhook = async function(ctx) {
    const { app, params, wrap } = ctx;
    const { agent } = app;
    const { uid, id, secret } = params;
    const agentInstance = await agent.findAgent(id);
    if (agentInstance) {
    } else {
    }
    ctx.body = agent.run(agentInstance);
};
module.exports.register = function(router, app) {
    router.all('/u/:uid/webhook/:id/:secret', webhook);
};
