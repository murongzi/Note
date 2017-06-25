
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.reducer';

export default (initState) => {
    return createStore(rootReducer, initState, applyMiddleware(thunk));
};