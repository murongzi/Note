import Detail from "./constant";
import {createAction} from "redux-actions";
import ApiService from "../../libs/api.request";

export const getDetail = createAction(Detail.DETAIL_SHOW, async(params) => {
    try {
        return await ApiService(`data/detail${params.No}.json`);
    } catch(e) {
        return Promise.reject(e);
    }
});