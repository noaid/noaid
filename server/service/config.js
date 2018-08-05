/**
 * Created by ximing on 2018/8/5.
 */
'use strict';
class Config {
    inject(app) {
        this.app = app;
        this.prefix = 'no_aid_u';
    }

    async getConfig(uid) {
        return await this.app.mongo.getCollection('configs').findOne({ uid: uid });
    }
}
module.exports = new Config();
