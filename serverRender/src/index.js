import React from 'react';
import { browserHistory } from 'react-router';
import { render } from 'react-dom';

import App from './containers/App';

import store from './store/index.store';

render(<App history={browserHistory} store={store} />, document.getElementById('appRoot'));