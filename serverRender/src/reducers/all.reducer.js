/**
 * Created by mazidong on 2017/6/27.
 */
import constant from '../constants/all.constants';


export default {
    detail: (state = null, action) => {
        switch(action.type) {
            case constant.ALL_LIST:
                return action.data;
            default:
                return state;
        }
    },
    homeList: (state = null, action) => {
        switch(action.type) {
            case constant.ALL_DETAIL:
                return action.data;
            default :
                return state;
        }
    }
};