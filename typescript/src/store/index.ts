import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';

import HomeReducers from "../containers/Home/reduce";

import DetailReducers from "../containers/Detail/reduce";

const Reducers = {
    routing:routerReducer,
    HomeReducers,
    DetailReducers
};

export default createStore(combineReducers(Reducers), applyMiddleware(promiseMiddleware()));