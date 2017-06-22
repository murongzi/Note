import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import store from './store/index.store';

import {Provider} from 'react-redux';

ReactDOM.render((
    <Provider store={store}>
        <Counter/>
    </Provider>
), document.getElementById("appRoot"))