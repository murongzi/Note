import React, {Component} from "react";
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';

import Home from "./Home/Home";
import Detail from "./Detail/Detail";

export default class extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Home}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route></Route>
                </Router>
            </Provider>
        );
    }
};