import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import _Assign from 'lodash/assign';
import HomeReducers from './home.reducer';
import DetailReducers from './detail.reducer';

const Reducers = _Assign({
  routing: routerReducer
}, HomeReducers, DetailReducers);

export default combineReducers(Reducers);
