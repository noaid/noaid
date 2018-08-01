/**
 * Created by ximing on 2018/7/18.
 */
'use strict';
const getMock = async function(ctx) {
    ctx.body = { code: 200 };
};
module.exports.register = function(router, app) {
    router.all('/mock*', getMock);
};
