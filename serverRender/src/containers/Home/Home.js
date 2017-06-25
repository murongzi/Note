import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Link } from 'react-router'
import Api from '../../libs/api';

import actions from "../../actions/home.action";

export default connect((state, owmProps) => ({
    reducer:state.HomeReducers
}), dispatch => ({
    action:bindActionCreators(actions, dispatch)
}))(class extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.action.queryData();
    }

    render() {
        return (
            <div>Home
                <button onClick={() => this.queryData()}>click</button>
                <Link to="/detail/123">Click me</Link>
                {this.renderList()}
            </div>
        );
    }

    renderList() {
        //if (!this.props.reducer || !this.props.reducer.homeList) return <div>empty</div>;

        return (
            <ul>
                {
                    this.props.reducer 
                    && this.props.reducer.homeList
                    && this.props.reducer.homeList.map((v, k) => {
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

    queryData() {
        console.log("");
    }
});
