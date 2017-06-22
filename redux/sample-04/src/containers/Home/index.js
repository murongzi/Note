import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomeAction from '../../actions/home.action';

export default connect((state, ownProps) => ({
    reducers:state.Home
}), dispatch => ({
    action:bindActionCreators(HomeAction, dispatch)
}))(class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>这个是Home页</p>
                <span>{this.props.reducers.count}</span>
                <button onClick={() => this.add()}>Click Me to add the num</button>
            </div>
        );
    }

    add() {
        this.props.action.getAdd();
    }
});