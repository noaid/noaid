/**
 * Created by ximing on 2018/8/1.
 */
const WebHook = require('./webhook');
module.exports = class Agent {
    constructor(app) {
        this.app = app;
    }

    createAgent(schema) {
        if (schema.type === WebHook.type) {
            return new WebHook(schema);
        } else {
            return null;
        }
    }

    async findSchemaFromDB(agentID) {}

    async findAgent(agentID) {
        const agentScheam = await this.findSchemaFromDB(agentID);
        if (agentScheam) {
            return this.createAgent(agentScheam);
        } else {
            return null;
        }
    }

    async run(agent) {
        if (agent) {
            return agent.run();
        } else {
            return null;
        }
    }
};
