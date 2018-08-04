/**
 * Created by ximing on 2018/8/4.
 */

const request = require('request-promise-native');
const url = require('url');
const boot = require('../boot');

const getCookieOption = (ctx) => ({
    path: '/',
    maxAge: Date.now() + 1000 * 60 * 60 * 24 * 265
});
const callback = async function(ctx) {
    try {
        console.log(ctx.query);
        let result = await request({
            url: 'https://github.com/login/oauth/access_token',
            headers: Object.assign({
                'Content-type': 'application/json',
                Accept: 'application/json'
            }),
            method: 'POST',
            body: JSON.stringify(
                {
                    client_id: boot.app.config.CLIENT_ID,
                    client_secret: boot.app.config.CLIENT_SECRET,
                    code: ctx.query.code,
                    state: ctx.query.state,
                    redirect_uri: ctx.query.redirect_uri
                },
                null,
                0
            )
        });
        if (typeof result === 'string') {
            result = JSON.parse(result);
        }
        console.log('access_token:', result, result.access_token);
        let userInfo = await request({
            url: `https://api.github.com/user?access_token=${result.access_token}`,
            headers: Object.assign({
                'Content-type': 'application/json',
                Accept: 'application/json',
                'User-Agent': 'no_aid'
            }),
            method: 'GET'
        });
        if (typeof userInfo === 'string') {
            userInfo = JSON.parse(userInfo);
        }
        console.log('oauth 获取用户信息', userInfo);
        // TODO 目前只支持一种登陆方式，所以ext可以这么写没问题，如果后面支持多种的话就要做merge
        userInfo = {
            name: userInfo.name,
            email: userInfo.email,
            avatar_url: userInfo.avatar_url,
            ext: {
                github: {
                    login: userInfo.login,
                    id: userInfo.id,
                    node_id: userInfo.node_id,
                    access_token: result.access_token
                }
            }
        };
        const { token, user } = await boot.service.user.setUserInfo(userInfo);
        ctx.cookies.set('noaid_token', token, getCookieOption(ctx));
        ctx.cookies.set('noaid_uid', user.id, getCookieOption(ctx));
        ctx.redirect(ctx.query.callback_url || '/');
    } catch (e) {
        console.error(e);
    }
};
module.exports.register = function(router, app) {
    router.all('/oauth/callback', callback);
};
