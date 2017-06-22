import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';
import {CONSTANTS} from '../actions/index';

const CitiesReducers = {
  geoAddress(state = null, action) {
    switch (action.type) {
      case CONSTANTS.SET_TEST:
        return action.data;
      default:
        return state;
    }
  }
};

const Reducers = {
    CitiesReducers:combineReducers(CitiesReducers)
};

export default combineReducers(Reducers);