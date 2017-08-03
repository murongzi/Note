import Detail from "./constant";

import {handleActions, Action} from 'redux-actions';

import MHome from "../Home/model";

import {IDetailModel} from "./IDetail"; 

const initState:IDetailModel = {
  detailShow:null
};

export default handleActions<IDetailModel, any>({
    [`${Detail.DETAIL_SHOW}_FULFILLED`]: (state:IDetailModel, action:Action<any>) => {
        return Object.assign({}, state, {detailShow:new MHome(action.payload)});
    }
}, initState);