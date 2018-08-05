/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
export default class CancelOrAddSelectItem {
    constructor(selectId) {
        this.selectId = selectId;
    }
    execute(desktop) {
        let selectApps = Object.assign({}, desktop['selectApps']);
        if (!!selectApps[this.selectId]) {
            delete selectApps[this.selectId];
        } else {
            selectApps[this.selectId] = this.selectId;
        }
        return { ...desktop, selectApps };
    }
}
