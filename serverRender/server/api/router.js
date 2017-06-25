import express, {Router} from 'express';
import {createMemoryHistory} from 'history';

import configureStore from '../../src/store/index.store';

import createRouter from '../../src/routers/index';

import { RouterContext, match } from 'react-router';
import ReactDOMServer from 'react-dom/server';

import React from 'react';
import {Provider} from 'react-redux';

import fs from 'fs';
import path from 'path';
import Api from "../../src/libs/api";

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
        console.log(renderProps);


        const reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c');
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                {<RouterContext {...renderProps} />}
            </Provider>
        );

        console.log('===============================', html);

        Api.request({
            "url":"http://www.mazidong.com/FE/data/homelist.json",
            "callback":(result) => {
                let state = JSON.stringify({HomeReducers:{"homeList":result.home}}).replace(/</g, '\\x3c');

                res.render("index.ejs", {html, state});
            }
        });

        //res.render("index", {html});

        /*res.render("index", (err, data) => {
            var str = data.replace(/\{html\}/g, html);

            if (!/\/detail\//.test(req.originalUrl)) {
                Api.request({
                    "url":"http://www.mazidong.com/FE/data/homelist.json",
                    "callback":(result) => {
                        console.log(result);

                        str = str.replace("{state}", JSON.stringify({HomeReducers:{"homeList":result.home}}));

                        res.send(str);
                    }
                });
            } else {
                res.send(str.replace("{state}", void(0)));
            }
        });*/
    });
});

export default serverRender;