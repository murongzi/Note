

import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './store';

import Home from './containers/Home';
import Detail from './containers/Detail';


const rootElement = document.getElementById('App');
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}>
      </Route>
      <Route path="/detail/:id" component={Detail}>
      </Route>
    </Router>
  </Provider>
), rootElement);

//结构

let set = new Set;

set.add("ab");
set.add("ab2");
set.add("ab3");
set.add({a:'test'});
set.forEach(function() {
  console.log(arguments);
});
debugger;

/* let uid = Symbol.for("uid"),
  object = {a:'test'};

  object[uid] = Math.random().toString(36).substr(1);

  let uid2 = Symbol.for("uid");
  let uid3 = Symbol("uid");

  console.log('================', uid === uid2);
  console.log('================', object[uid2]); */