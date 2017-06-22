import http from 'http';
import Express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import {Provider} from 'react-redux';

import store from './store/index';

import App from "./views/app";
import Detail from "./views/detail";
import List from "./views/list";

const app = Express();
const port = 3000;

app.use(handleRender)

function handleRender(req, res) {
  console.log('==============================', req);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

/*function handleRender(req, res, component) {
  res.send(renderFullPage(renderToString(component)));
}

app.get('/', function(req, res) {
  handleRender(req, res, <App />)
});
app.get('/detail', function(req, res) {
  handleRender(req, res, <Detail />)
});
app.get('/list', function(req, res) {
  handleRender(req, res, <List />)
});*/

function renderFullPage(html, preloadedState) {
  return `<html>
            <head>
              <meta charset="utf-8"/>
              <title>这是在测试服务端node的渲染</title>
            </head>
            <body>

              ${html}

              <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
              </script>
            </body>
          </html>`;
}


app.listen(port)

console.log(`Server running at http://127.0.0.1:${port}/`);