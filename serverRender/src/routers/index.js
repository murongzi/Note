import React, {Component} from "react";
import {Router, Route} from 'react-router';

import Home from "../containers/Home/Home";
import Detail from "../containers/Detail/Detail";

export default history => (
    <Router history={history}>
        <Route path="/" component={Home}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
    </Router>
)