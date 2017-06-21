import http from 'http';
import Express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import App from "./views/app";
import Detail from "./views/detail";
import List from "./views/list";

const app = Express();
const port = 3000;

//Serve static files
//app.use('/static', Express.static('static'));

// This is fired every time the server side receives a request
//app.use(handleRender);

function handleRender(req, res, component) {
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
});

function renderFullPage(html) {
  return `<html>
            <head>
              <meta charset="utf-8"/>
              <title>这是在测试服务端node的渲染</title>
            </head>
            <body>${html}</body>
          </html>`;
}


app.listen(port)

console.log(`Server running at http://127.0.0.1:${port}/`);