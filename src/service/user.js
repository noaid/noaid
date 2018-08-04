/**
 * Created by ximing on 2018/8/5.
 */

const crypto = require('crypto');

class User {
    inject(app) {
        this.app = app;
        this.prefix = 'no_aid_u';
    }

    async getUserInfo(uid, token) {
        return await this.app.redis.hgetall(`${this.prefix}/${uid}/${token}`);
    }

    async setUserInfo(userInfo) {
        const users = this.app.mongo.getCollection('users');
        let user = await users.findOne({ email: userInfo.email });
        let id = '';
        if (!user) {
            const { insertedId } = await users.insertOne(userInfo);
            id = insertedId;
            user = { id, ...userInfo };
        } else {
            id = user._id;
            user.id = id;
            delete user._id;
        }
        const token = crypto
            .createHash('md5')
            .update(`${Date.now()}/${user.id}/${user.email}`)
            .digest('hex');
        await this.app.redis.hmset(`${this.prefix}/${id}/${token}`, user);
        return {
            token,
            user
        };
    }
}
module.exports = new User();
