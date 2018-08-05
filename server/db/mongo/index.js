/**
 * Created by ximing on 2018/8/2.
 */

const MongoClient = require('mongodb').MongoClient;

class Mongo {
    createIndex() {
        this.noAidDB.collection('users').createIndex({ email: 1 }, {});
    }
    async init(app) {
        this.client = await MongoClient.connect(
            app.config.MONGO_DB,
            { useNewUrlParser: true }
        );
        this.noAidDB = this.client.db('no_aid');
        this.createIndex();
    }
    getCollection(name) {
        return this.noAidDB.collection(name);
    }
}
module.exports = new Mongo();
