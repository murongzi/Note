import api from '../libs/api';
import constant from '../constants/detail.constants';

export default {
    getDetail: (params) => {
        return (dispatch, getState) => {
            var state = getState();

            if (state.DetailReducers.detail) {
                    return dispatch({
                        type:constant.DETAIL,
                        data:state.DetailReducers.detail
                    })
            }

            api.request({
                "url":"http://www.mazidong.com/FE/data/detail.json",
                "callback":(res) => {
                    dispatch({
                        type:constant.DETAIL,
                        data:res.detail
                    });

                    params && params.callback && params.callback(res.detail);
                }
            });
        }
    }
};