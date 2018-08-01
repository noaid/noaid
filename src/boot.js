const Agent = require('./agent');
module.exports = class Boot {
    constructor(app) {
        app.agent = new Agent(app);
    }
};
