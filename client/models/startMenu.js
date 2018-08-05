/**
 * Created by ximing on 2018/8/4.
 */
'use strict';
export default {
    namespace: 'startMenu',
    state: {
        open: false
    },
    reducers: {
        toggle(state) {
            return { ...state, open: !state.open };
        },
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
