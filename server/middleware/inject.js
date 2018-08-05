const WrapResponse = require('../utils/wrapResponse');

module.exports = (app) =>
    app.use(async (ctx, next) => {
        ctx.app = app;
        ctx.wrap = new WrapResponse(ctx);
        await next();
    });
