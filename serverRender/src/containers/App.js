import React, {Component} from "react";
import {Provider} from 'react-redux';
import createRouter from '../routers/index';

export default class extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                {createRouter(history)}
            </Provider>
        );
    }
};