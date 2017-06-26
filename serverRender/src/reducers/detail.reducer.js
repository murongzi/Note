import constant from '../constants/detail.constants';


export default {
    detail: (state = null, action) => {
        switch(action.type) {
            case constant.DETAIL:
                return action.data;
            default:
                return state;
        }
    }
};