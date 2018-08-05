/**
 * Created by ximing on 2018/8/2.
 */

const path = require('path');

const defaultConfigDir = `${process.cwd()}/config`;
function isFunction(functionToCheck) {
    return (
        functionToCheck && Object.prototype.toString.call(functionToCheck) === '[object Function]'
    );
}
function getConfig(configPath) {
    try {
        const targetConfig = require(configPath);
        if (isFunction(targetConfig)) {
            return targetConfig();
        }
        return targetConfig;
    } catch (e) {
        return {};
    }
}

exports.config = function({ configDir = defaultConfigDir } = {}) {
    const nodeEnv = process.NODE_ENV || 'local';
    const targetConfig = getConfig(path.join(configDir, `config.${nodeEnv}`));
    const defaultConfig = getConfig(path.join(configDir, 'config.default'));
    return Object.assign({}, targetConfig, defaultConfig);
};
