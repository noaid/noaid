/**
 * Created by ximing on 2018/8/2.
 */

const { createLogger, format, transports } = require('winston');

const logger = () =>
    createLogger({
        level: 'debug',
        format: format.json(),
        transports: [
            new transports.Console({
                handleExceptions: true
            })
            // new winston.transports.File({ filename: 'error.log', level: 'error' }),
            // new winston.transports.File({ filename: 'combined.log' })
        ]
    });
module.exports = logger;
