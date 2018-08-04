/**
 * Created by ximing on 2018/7/18.
 */
const request = require('request');

const home = async function(ctx) {
    try {
        ctx.response.type = 'html';
        ctx.body = request(`http://0.0.0.0:9123`);
    } catch (e) {
        console.error(e);
    }
};
module.exports.register = function(router, app) {
    router.get('/', home);
    router.get('/login', home);
};
