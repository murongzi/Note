import constant from '../constants/home.constants';

export default {
    homeList: (state = null, action) => {
        switch(action.type) {
            case constant.HOME:
                return action.data;
            default :
                return state;
        }
    }
};