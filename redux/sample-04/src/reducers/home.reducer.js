import constant from '../constants/home.constant';

export default {
    count:(state, action) => {
        if (state === undefined) return 0;

        switch (action.type) {
            case constant.HOME:
                return state + 1;
            default:
                return state;
        }
    }
}