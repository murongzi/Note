import {createAction} from 'redux-actions';
import api from '../libs/api';
import constant from '../constants/home.constants';

export default {
    queryData:(params) => {
        return (dispatch, getState) => {
            var state = getState();

            if (state.HomeReducers.homeList) {
                    return dispatch({
                        type:constant.HOME,
                        data:state.HomeReducers.homeList
                    })
            }

            api.request({
                "url":"http://www.mazidong.com/FE/data/homelist.json",
                "callback":(res) => {
                    dispatch({
                        type:constant.HOME,
                        data:res.home
                    });
                }
            });
        }
    }
};