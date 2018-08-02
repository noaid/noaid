const http = require('http');
const path = require('path');
const Agent = require('./agent');
const mongo = require('./db/mongo');
const logger = require('./utils/logger');

module.exports = class Boot {
    constructor(app) {
        this.app = app;
        app.agent = new Agent(app);
        app.mongo = mongo;
        /*eslint-disable*/
        global.boot = this;
        /* eslint-enable */
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
        mongo.init(this.app).then(
            () => {
                this.listen();
            },
            (err) => {
                console.error('err', err);
            }
        );
    }
};
