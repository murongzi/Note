import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props

        return (
            <div>
                {value}
                <button onClick={() => onIncrement()}>+</button>
            </div>
        );
    }
}