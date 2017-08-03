import {handleActions} from 'redux-actions';
import HOME from './const';
import MHome from "./model";

const initState = {
  list:null
};

export default handleActions({

  [`${HOME.LIST}_FULFILLED`]: (state, action) => {
    let {list} = action.payload,
      arry:Array<MHome> = [];

    list.map(v => {
      arry.push(new MHome(v));
    });

    return Object.assign({}, state, {list: arry});
  }

}, initState);