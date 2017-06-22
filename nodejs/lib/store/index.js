
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';

export default createStore(rootReducer);