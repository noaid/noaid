/**
 * Created by ximing on 2018/8/2.
 */
const IoRedis = require('ioredis');

class Redis {
    init(app) {
        this.client = new IoRedis(app.config.REDIS);
    }

    getClient() {
        return this.client;
    }
}
module.exports = new Redis();
