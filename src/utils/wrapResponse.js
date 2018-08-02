class WrapResponse {
    constructor(ctx) {
        this.ctx = ctx;
    }
    base(code, data, error) {
        this.ctx.body = {
            code,
            data,
            error
        };
    }
    error(code = 500, msg = 'server error') {
        return this.base(code, null, {
            msg
        });
    }
    ok(data = {}) {
        return this.base(0, data);
    }
    notFound(msg = 'source not found') {
        return this.base(404, null, {
            msg
        });
    }
}
module.exports = WrapResponse;
