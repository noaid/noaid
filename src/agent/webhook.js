/**
 * Created by ximing on 2018/8/1.
 */
const Base = require('./base');
class WebHook extends Base {
    run() {}
}
WebHook.type = 'webhook';
module.exports = WebHook;
