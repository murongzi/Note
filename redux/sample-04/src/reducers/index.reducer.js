import {combineReducers} from 'redux';

import HomeReducer from "./home.reducer";

export default combineReducers(Object.assign({}, {
    Home:combineReducers(HomeReducer)
}));