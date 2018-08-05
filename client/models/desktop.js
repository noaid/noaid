/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
export default {
    namespace: 'desktop',
    state: {
        apps: [
            {
                id: '1',
                name: '大象',
                url:
                    'https://s3plus.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/distribute/5933d195-8d32-4270-b017-b71ef5440871_1533388730353?filename=nx-logo%402x.png'
            },
            {
                id: '2',
                name: '大象',
                url:
                    'https://s3plus.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/distribute/5933d195-8d32-4270-b017-b71ef5440871_1533388730353?filename=nx-logo%402x.png'
            }
        ],
        selectApps: {}
    },
    reducers: {
        init: {
            success(state, action) {
                return { ...state, ...action.payload };
            },
            error(state) {
                return state;
            }
        },
        exec(state, action) {
            let commands = action.payload;
            if (!Array.isArray(commands)) {
                commands = [commands];
            }
            let _state = { ...state };
            for (let i = 0, l = commands.length; i < l; i++) {
                _state = commands[i].execute(_state);
            }
            return _state;
        }
    },
    actions: {
        init: async () => {}
    }
};
