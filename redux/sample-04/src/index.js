import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router'
import {Provider} from 'react-redux';
import store from './stores/index.store';
import Home from './containers/Home';

render(
    (
        <Provider store={store}>
            <Home />
        </Provider>
    ),
    document.getElementById('rootApp')
)
