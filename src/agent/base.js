class Base {
    constructor(schema) {
        this.keepEvents = true;
    }
    run() {
        throw new Error('This method must be implemented');
    }
}
module.exports = Base;
