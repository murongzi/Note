import express, {Router} from 'express';
import {createMemoryHistory} from 'history';

import configureStore from '../../src/store/index.store';

import createRouter from '../../src/routers/index';

import { RouterContext, match } from 'react-router';
import ReactDOMServer from 'react-dom/server';

import React from 'react';
import {Provider} from 'react-redux';

const serverRender = Router();

function getReduxPromise(props, store) {
    const comp = props.components[props.components.length - 1].WrappedComponent;
    return comp.loadData ?
        comp.loadData({ store, props }) :
        Promise.resolve();
}

serverRender.route('*').get((req, res) => {
    const history = createMemoryHistory();
    const store = configureStore();
    const routes = createRouter(history);

    match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
        const reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c');
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                {<RouterContext {...renderProps} />}
            </Provider>
        );

        console.log(html);

        res.render("index", (err, data) => {
            res.send(data.replace(/\{html\}/g, html));
        });
    });
});

export default serverRender;