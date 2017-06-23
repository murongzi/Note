import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux';
import store from './stores/index.store';
import Home from './containers/Home';
import App from './containers/App';
import Detail from './containers/Detail';

/*render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="detail" component={Detail}/>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('rootApp')
)
*/

render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/detail/:id" component={Detail}/>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('rootApp')
)

