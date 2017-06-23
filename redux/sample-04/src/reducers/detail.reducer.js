import constant from '../constants/detail.constant';

export default {
    count:(state, action) => {
        if (state === undefined) return 0;

        switch (action.type) {
            case constant.DETAIL:
                return state + 1;
            default:
                return state;
        }
    }
}