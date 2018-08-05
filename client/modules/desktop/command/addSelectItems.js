/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
import _ from 'lodash';

export default class AddSelectItems {
    constructor(selectIds) {
        if (Object.prototype.toString.call(selectIds).slice(8, -1) === 'Array') {
            this.selectIds = selectIds;
        } else if (_.isString(selectIds)) {
            this.selectIds = [Number(selectIds)];
        } else if (_.isNumber(selectIds)) {
            this.selectIds = [selectIds];
        } else {
            this.selectIds = [];
        }
    }
    execute(desktop) {
        let _temp = {};
        this.selectIds.forEach((item) => {
            _temp[item] = item;
        });
        return { ...desktop, selectApps: _temp };
    }
}
