/**
 * Created by ximing on 2018/8/5.
 */
'use strict';
class Desktop {
    inject(app) {
        this.app = app;
        this.appsCollecttion = this.app.mongo.getCollection('apps');
    }

    async getApps(uid) {
        return await this.appsCollecttion.findOne({ uid: uid });
    }

    async addApps(app) {
        await this.appsCollecttion.insertOne(app);
        return app;
    }

    async updateApp(uid, app) {
        let oldApp = await this.appsCollecttion.findOne({ uid, _id: app._id });
        if (oldApp) {
            let newApp = { ...oldApp, ...app };
            await this.appsCollecttion.updateOne({ uid, _id: app._id }, newApp);
            return newApp;
        } else {
        }
    }
}
module.exports = new Desktop();
