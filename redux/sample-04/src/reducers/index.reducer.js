import {combineReducers} from 'redux';

import HomeReducer from "./home.reducer";
import DetailReducer from "./detail.reducer";

export default combineReducers(Object.assign({}, {
    Home:combineReducers(HomeReducer),
    Detail:combineReducers(DetailReducer)
}));