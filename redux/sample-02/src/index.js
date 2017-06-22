import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import store from './store/index.store';

const render = () => ReactDOM.render((
    <Counter 
        value={store.getState().count}
        onIncrement={() => store.dispatch({type:"add"})}
    />
), document.getElementById("appRoot"))

render();

store.subscribe(render);