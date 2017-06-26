import React, {Component} from "react";
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from "../../actions/detail.action";

export default connect((state, owmProps) => ({
    reducer:state.DetailReducers
}), dispatch => ({
    action:bindActionCreators(actions, dispatch)
}))(class extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.action.getDetail();
    }

    render() {
        let data = this.props.reducer.detail || {};

        return (
            <div>test
                <Link to="/">go main page</Link>

                <ul>
                    <li>id:{data.id}</li>
                    <li>name:{data.name}</li>
                    <li>age:{data.age}</li>
                </ul>
            </div>
        );
    }
});