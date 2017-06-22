import React, {Component} from 'react';
import {connect} from 'react-redux';
import action from '../actions/index.action';

export default connect((state, ownProps) => {
  return {
    count: state.count
  };
})(class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props

        return (
            <div>
                {this.props.count}
                <button onClick={() => this.props.dispatch(action.add())}>+</button>
            </div>
        );
    }
});