/**
 * Created by ximing on 2018/8/5.
 */
const path = require('path');
const fs = require('fs');
const { getDirectories } = require('./file');

module.exports = function startupApps(app, boot) {
    const dirs = getDirectories(path.join(__dirname, '../../apps'));
    for (let i = 0, l = dirs.length; i < l; i++) {
        const Server = require(`${dirs[i]}/server`);
        const pkg = require(`${dirs[i]}/package.json`);
        if (!pkg.noaid) {
            throw new Error(`${dirs[i]} noaid key is required`);
        }
        boot.setApp(pkg.noaid.key, new Server(boot));
    }
};
