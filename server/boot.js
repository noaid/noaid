const http = require('http');
const path = require('path');
const Agent = require('./agent');
const mongo = require('./db/mongo');
const redis = require('./db/redis');
const user = require('./service/user');
const logger = require('./utils/logger');

class Boot {
    init(app) {
        this.app = app;
        app.agent = new Agent(app);
        this.mongo = app.mongo = mongo;
    }

    initService() {
        user.inject(this);
        this.service = this.app.service = { user };
    }

    listen() {
        const server = http.createServer(this.app.callback());
        server.listen(this.app.config.PORT, () => {
            console.log(`listen port is ${this.app.config.PORT}`);
        });
    }
    config() {
        this.app.config = require('./lib/env-config').config({
            configDir: path.join(__dirname, '../', 'config'),
            pkg: require('../package.json')
        });
    }
    start() {
        this.config();
        this.app.logger = logger();
        this.initService();
        mongo.init(this.app).then(
            () => {
                redis.init(this.app);
                this.redis = this.app.redis = redis.getClient();
                this.listen();
            },
            (err) => {
                console.error('err', err);
            }
        );
    }
}
module.exports = new Boot();
