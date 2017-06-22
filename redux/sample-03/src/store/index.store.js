import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers/index';

export default createStore(combineReducers(reducer), applyMiddleware(thunk));
