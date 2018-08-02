module.exports = (app) =>
    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {}
    });
