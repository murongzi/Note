/**
 * Created by mazidong on 2017/6/27.
 */
import React, {Component} from "react";
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HomeActions from "../../actions/home.action";
import DetailActions from "../../actions/detail.action";

export default connect((state, owmProps) => ({
    reducer:state
}), dispatch => ({
    action:bindActionCreators(Object.assign({}, HomeActions, DetailActions), dispatch)
}))(class extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.action.queryData();
        this.props.action.getDetail();
    }

    render() {

        return (
            <div>test
                <Link to="/">go main page</Link>

                {this.renderDetail()}

                {this.renderHome()}
            </div>
        );
    }

    renderDetail() {
        let data;

        if (!this.props.reducer || !this.props.reducer.DetailReducers || !this.props.reducer.DetailReducers.detail) return;

        data = this.props.reducer.DetailReducers.detail;

        return (
            <ul>
                <li>Detail page</li>
                <li>id:{data.id}</li>
                <li>name:{data.name}</li>
                <li>age:{data.age}</li>
            </ul>
        );
    }

    renderHome() {
        return (
            <ul>
                <li>渲染主页</li>
                {
                    this.props.reducer
                    && this.props.reducer.HomeReducers
                    && this.props.reducer.HomeReducers.homeList
                    && this.props.reducer.HomeReducers.homeList.map((v, k) => {
                        return (
                            <li key={k}>
                                <span>{v.id}</span>
                                <span>{v.name}</span>
                                <span>{v.age}</span>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
});