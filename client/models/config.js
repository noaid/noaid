/**
 * Created by ximing on 2/18/18.
 */
'use strict';
export default {
    namespace: 'config',
    state: { uids: {} },
    reducers: {
        init: {
            success(state, action) {
                return { ...state, ...action.payload };
            },
            error(state) {
                return state;
            }
        }
    },
    actions: {
        init: async () => {}
    }
};
