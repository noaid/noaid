/**
 * Created by ximing on 2018/8/4.
 */

const pathIgnore = ['/favicon.ico', 'socket.io', '/login'];
const pathIgnoreReg = [/\/oauth\/.*/, /\/public\/.*/, /\/assert\/.*/, /\/webhook\/.*/];
function inIgnorePathFn(requestPath) {
    for (const item in pathIgnore) {
        if (pathIgnore[item] === requestPath) {
            return true;
        }
    }
    for (const item in pathIgnoreReg) {
        if (pathIgnoreReg[item].test(requestPath)) {
            return true;
        }
    }
    return false;
}
const redirectToLogin = (ctx, clientId) => {
    // let base64url = new Buffer(ctx.path).toString('base64');
    ctx.redirect(`/login?callback_url=${encodeURIComponent(ctx.path)}&client_id=${clientId}`);
};
module.exports = (app) =>
    app.use(async (ctx, next) => {
        const requestpath = ctx.request.path;
        const clientId = app.config.CLIENT_ID;
        if (inIgnorePathFn(requestpath)) {
            try {
                const bToken = ctx.cookies.get('noaid_token');
                const bUid = ctx.cookies.get('noaid_uid');
                if (bToken && bUid) {
                    const res = await app.service.user.getUserInfo(bUid, bToken);
                    if (res) {
                        ctx.state.user = res;
                    }
                }
                await next();
            } catch (err) {}
        } else {
            try {
                const bToken = ctx.cookies.get('noaid_token');
                const bUid = ctx.cookies.get('noaid_uid');
                console.log('cookie', bToken, bUid);
                if (bToken && bUid) {
                    const res = await app.service.user.getUserInfo(bUid, bToken);
                    console.log('userName', res.name);
                    if (res) {
                        ctx.state.user = res;
                        await next();
                    } else {
                        console.log('鉴权未通过去登陆页');
                        redirectToLogin(ctx, clientId);
                    }
                } else if (requestpath === '/login') {
                    console.log('没有发现cookie 已经是登陆页');
                    await next();
                } else {
                    console.log('没有发现cookie 去登陆页');
                    redirectToLogin(ctx, clientId);
                }
            } catch (err) {
                console.log('error', err);
                ctx.redirect('/login');
            }
        }
    });
