module.exports = (app) =>
    app.use(async function(ctx, next) {
        try {
            await next();
        } catch (err) {}
    });
